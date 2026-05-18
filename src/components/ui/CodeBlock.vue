<template>
  <div class="rounded-xl overflow-hidden border border-border font-mono text-sm" style="background:#0f1117">

    <!-- Toolbar -->
    <div
      class="flex items-center gap-2.5 px-4 h-9 border-b"
      style="background:#0f1117;border-color:rgba(255,255,255,0.07)"
    >
      <!-- Language badge -->
      <span
        class="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded"
        :style="langBadge.style"
      >{{ langBadge.label }}</span>

      <!-- Copy button -->
      <button
        @click="copy"
        class="ml-auto flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded transition-colors"
        :class="did ? 'text-emerald-400' : 'hover:bg-white/5'"
        :style="did ? '' : 'color:#6b7280'"
      >
        <svg v-if="!did" class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
          <rect x="9" y="9" width="13" height="13" rx="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        <svg v-else class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        {{ did ? 'Copied' : 'Copy' }}
      </button>
    </div>

    <!-- Code lines -->
    <div class="overflow-auto" :style="`max-height:${maxH};background:#0f1117`">
      <div class="py-4">
        <div
          v-for="(line, i) in lines"
          :key="i"
          class="flex min-h-[1.6rem]"
          @mouseenter="e => e.currentTarget.style.background='rgba(255,255,255,0.025)'"
          @mouseleave="e => e.currentTarget.style.background=''"
        >
          <span
            class="select-none text-right w-10 shrink-0 px-3 leading-[1.6rem] tabular-nums text-xs"
            style="color:#3d4451"
          >{{ i + 1 }}</span>
          <span
            class="pr-8 leading-[1.6rem] whitespace-pre"
            style="color:#abb2bf"
            v-html="line"
          ></span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  code:   { type: String, required: true },
  lang:   { type: String, default: 'vue' },
  maxH:   { type: String, default: '480px' },
});

// ── Badge ─────────────────────────────────────────────────────────────────────
const BADGES = {
  vue:        { label: 'Vue',  style: 'background:rgba(130,170,255,0.12);color:#82aaff' },
  js:         { label: 'JS',   style: 'background:rgba(247,223,30,0.1);color:#f7e07a'  },
  javascript: { label: 'JS',   style: 'background:rgba(247,223,30,0.1);color:#f7e07a'  },
  ts:         { label: 'TS',   style: 'background:rgba(49,120,198,0.15);color:#79b8ff'  },
  bash:       { label: 'bash', style: 'background:rgba(152,195,121,0.1);color:#98c379'  },
  sh:         { label: 'sh',   style: 'background:rgba(152,195,121,0.1);color:#98c379'  },
  html:       { label: 'HTML', style: 'background:rgba(224,108,117,0.1);color:#e06c75'  },
};
const langBadge = computed(() => BADGES[props.lang] ?? BADGES.vue);

// ── Highlighter ───────────────────────────────────────────────────────────────
function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function sp(color, txt) {
  return `<span style="color:${color}">${txt}</span>`;
}

// One Dark palette
const T = {
  kw:      '#c678dd',
  vue:     '#61afef',
  str:     '#98c379',
  comment: '#5c6370',
  num:     '#d19a66',
  tag:     '#e06c75',
  section: '#c678dd',
  flag:    '#d19a66',
  cmd:     '#61afef',
};

const KW = new Set([
  'import','from','export','default','const','let','var','function',
  'async','await','return','if','else','for','while','new','class',
  'extends','typeof','instanceof','in','of','try','catch','finally',
  'throw','true','false','null','undefined','this','break','continue',
  'switch','case','do','delete','void','static',
]);

const VUE_API = new Set([
  'ref','reactive','computed','watch','watchEffect','toRef','toRefs',
  'onMounted','onBeforeUnmount','onUnmounted','onUpdated','onBeforeUpdate',
  'defineProps','defineEmits','defineExpose','provide','inject','nextTick',
  'shallowRef','markRaw','readonly',
]);

const BASH_CMDS = new Set(['npm','npx','yarn','pnpm','git','node','bun','vite']);

// Bash tokenizer
function tokenizeBash(line) {
  const trimmed = line.trimStart();
  if (trimmed.startsWith('#')) {
    return `<span style="color:${T.comment};font-style:italic">${esc(line)}</span>`;
  }
  let out = '';
  let i = 0;
  const L = line.length;
  while (i < L) {
    const c = line[i];
    if (c === '#') { out += sp(T.comment, esc(line.slice(i))); break; }
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < L && line[j] !== c) { if (line[j] === '\\') j++; j++; }
      j = Math.min(j + 1, L);
      out += sp(T.str, esc(line.slice(i, j)));
      i = j; continue;
    }
    if (c === '$') {
      out += sp(T.vue, '$');
      i++; continue;
    }
    if ((c === '-') && i > 0 && /\s/.test(line[i - 1])) {
      const s = i;
      while (i < L && !/\s/.test(line[i])) i++;
      out += sp(T.flag, esc(line.slice(s, i)));
      continue;
    }
    if (/[a-zA-Z_]/.test(c)) {
      const s = i;
      while (i < L && /[a-zA-Z0-9_\-.]/.test(line[i])) i++;
      const w = line.slice(s, i);
      if (BASH_CMDS.has(w)) out += sp(T.cmd, w);
      else                   out += esc(w);
      continue;
    }
    if (/[0-9]/.test(c)) {
      const s = i;
      while (i < L && /[0-9.]/.test(line[i])) i++;
      out += sp(T.num, line.slice(s, i));
      continue;
    }
    out += esc(c);
    i++;
  }
  return out;
}

// Vue / JS tokenizer
function tokenizeVue(line) {
  let out = '';
  let i = 0;
  const L = line.length;

  while (i < L) {
    const c = line[i];

    if (c === '/' && line[i + 1] === '/') {
      out += `<span style="color:${T.comment};font-style:italic">${esc(line.slice(i))}</span>`;
      break;
    }

    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < L) {
        if (line[j] === '\\') { j += 2; continue; }
        if (line[j] === c)    { j++; break; }
        j++;
      }
      out += sp(T.str, esc(line.slice(i, j)));
      i = j; continue;
    }

    if (c === '`') {
      let j = i + 1;
      while (j < L) {
        if (line[j] === '\\') { j += 2; continue; }
        if (line[j] === '`')  { j++; break; }
        j++;
      }
      out += sp(T.str, esc(line.slice(i, j)));
      i = j; continue;
    }

    if (c === '<' && /[a-zA-Z\/!]/.test(line[i + 1] || '')) {
      const rest = line.slice(i);
      const sec = rest.match(/^<\/?(template|script|style)\b[^>]*>/);
      if (sec) {
        out += sp(T.section, esc(sec[0]));
        i += sec[0].length; continue;
      }
      out += sp('#abb2bf', '&lt;');
      i++;
      if (line[i] === '/') { out += sp('#abb2bf', '/'); i++; }
      const s = i;
      while (i < L && /[a-zA-Z0-9\-_.]/.test(line[i])) i++;
      if (i > s) out += sp(T.tag, esc(line.slice(s, i)));
      continue;
    }

    if (c === '>') { out += '&gt;'; i++; continue; }
    if (c === '&') { out += '&amp;'; i++; continue; }

    if (/[a-zA-Z_$]/.test(c)) {
      const s = i;
      while (i < L && /[a-zA-Z0-9_$]/.test(line[i])) i++;
      const w = line.slice(s, i);
      if      (KW.has(w))      out += sp(T.kw, w);
      else if (VUE_API.has(w)) out += sp(T.vue, w);
      else                     out += esc(w);
      continue;
    }

    if (/[0-9]/.test(c) && (i === 0 || !/[a-zA-Z_$]/.test(line[i - 1]))) {
      const s = i;
      while (i < L && /[0-9._eExX]/.test(line[i])) i++;
      out += sp(T.num, line.slice(s, i));
      continue;
    }

    out += esc(c);
    i++;
  }
  return out;
}

function tokenizeLine(line) {
  const l = props.lang;
  if (l === 'bash' || l === 'sh') return tokenizeBash(line);
  return tokenizeVue(line);
}

const lines = computed(() =>
  props.code.split('\n').map(line => tokenizeLine(line))
);

// ── Copy ──────────────────────────────────────────────────────────────────────
const did = ref(false);
async function copy() {
  try {
    await navigator.clipboard.writeText(props.code);
    did.value = true;
    setTimeout(() => { did.value = false; }, 2000);
  } catch { /* unavailable */ }
}
</script>

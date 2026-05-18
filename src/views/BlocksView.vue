<template>
  <div class="flex min-h-screen">

    <!-- ── Enhanced sidebar ───────────────────────────────────────────────── -->
    <aside class="w-56 shrink-0 border-r hidden lg:flex flex-col sticky top-[57px] h-[calc(100vh-57px)] overflow-y-auto">

      <!-- Blocks nav -->
      <div class="p-4 flex-1">
        <div class="flex items-center justify-between mb-3">
          <p class="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Blocks</p>
          <span class="text-[10px] font-mono font-medium bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full leading-none">
            {{ blocks.length }}
          </span>
        </div>

        <nav class="space-y-px mb-6">
          <a
            v-for="(block, i) in blocks"
            :key="block.id"
            :href="`#${block.id}`"
            @click.prevent="scrollToBlock(block.id)"
            class="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-sm transition-colors"
            :class="activeId === block.id
              ? 'bg-accent text-foreground font-medium'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'"
          >
            <span
              class="font-mono text-[10px] tabular-nums w-4 shrink-0"
              :class="activeId === block.id ? 'text-foreground/50' : 'text-muted-foreground/35'"
            >{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="truncate">{{ block.title }}</span>
          </a>
        </nav>

        <div class="border-t mb-4" />

        <!-- Docs nav -->
        <p class="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">Documentation</p>
        <nav class="space-y-px">
          <RouterLink
            v-for="link in docLinks"
            :key="link.to"
            :to="link.to"
            class="block px-2.5 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
          >{{ link.label }}</RouterLink>
        </nav>
      </div>

      <!-- Sidebar footer -->
      <div class="p-4 border-t shrink-0">
        <a
          href="https://github.com/hamzanachit/nmapvuejs"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-md hover:bg-accent/50"
        >
          <svg class="size-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          Contribute a block
        </a>
      </div>
    </aside>

    <!-- ── Main content ───────────────────────────────────────────────────── -->
    <div class="flex-1 min-w-0">
      <div class="max-w-4xl mx-auto px-6 py-12">

        <!-- Page header -->
        <div class="flex items-end justify-between pb-8 mb-14 border-b">
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">nmapjs</p>
            <h1 class="text-3xl font-bold tracking-tight">Blocks</h1>
            <p class="text-muted-foreground mt-1.5">Ready-to-use map components. Preview live, copy the source.</p>
          </div>
          <span class="text-sm text-muted-foreground tabular-nums hidden sm:block">{{ blocks.length }} blocks</span>
        </div>

        <!-- Block list -->
        <div class="space-y-20">
          <section
            v-for="(block, bi) in blocks"
            :key="block.id"
            :id="block.id"
          >
            <!-- Block header -->
            <div class="flex items-start justify-between gap-6 mb-5">
              <div class="flex items-start gap-4">
                <span class="font-mono text-xl font-bold text-muted-foreground/20 leading-tight tabular-nums select-none pt-0.5">
                  {{ String(bi + 1).padStart(2, '0') }}
                </span>
                <div>
                  <h2 class="font-semibold text-lg leading-tight">{{ block.title }}</h2>
                  <p class="text-sm text-muted-foreground mt-0.5">{{ block.description }}</p>
                </div>
              </div>

              <!-- Preview / Code toggle (underline style) -->
              <div class="flex items-center shrink-0 border-b border-border gap-0">
                <button
                  v-for="tab in ['Preview', 'Code']"
                  :key="tab"
                  @click="activeTabs[block.id] = tab.toLowerCase()"
                  class="px-3 pb-2 text-sm font-medium transition-colors border-b-2 -mb-px"
                  :class="activeTabs[block.id] === tab.toLowerCase()
                    ? 'text-foreground border-foreground'
                    : 'text-muted-foreground border-transparent hover:text-foreground'"
                >{{ tab }}</button>
              </div>
            </div>

            <!-- Preview pane -->
            <div
              v-show="activeTabs[block.id] === 'preview'"
              class="relative h-[480px] rounded-xl border overflow-hidden"
            >
              <component :is="block.component" />
            </div>

            <!-- Code editor pane -->
            <div
              v-show="activeTabs[block.id] === 'code'"
              class="rounded-xl overflow-hidden border border-border"
              style="background:#0f1117"
            >
              <!-- Toolbar -->
              <div
                class="flex items-center gap-3 px-4 h-10 border-b"
                style="background:#0f1117;border-color:rgba(255,255,255,0.07)"
              >
                <!-- Filename pill -->
                <div
                  class="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono"
                  style="background:rgba(255,255,255,0.05);color:#9ca3af"
                >
                  <svg class="size-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                    <path d="M13 2v7h7"/>
                  </svg>
                  {{ block.filename }}
                </div>
                <!-- Language badge -->
                <span
                  class="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded"
                  style="background:rgba(130,170,255,0.1);color:#82aaff"
                >Vue</span>

                <!-- Copy button -->
                <button
                  @click="copyCode(block)"
                  class="ml-auto flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md transition-colors"
                  :class="copied[block.id] ? 'text-emerald-400' : 'hover:bg-white/5'"
                  :style="copied[block.id] ? '' : 'color:#6b7280'"
                >
                  <svg v-if="!copied[block.id]" class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                    <rect x="9" y="9" width="13" height="13" rx="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                  <svg v-else class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {{ copied[block.id] ? 'Copied' : 'Copy' }}
                </button>
              </div>

              <!-- Code lines -->
              <div class="overflow-auto max-h-[520px] font-mono text-sm" style="background:#0f1117">
                <div class="py-5">
                  <div
                    v-for="(line, idx) in block.codeLines"
                    :key="idx"
                    class="flex min-h-[1.6rem]"
                    @mouseenter="e => e.currentTarget.style.background='rgba(255,255,255,0.025)'"
                    @mouseleave="e => e.currentTarget.style.background=''"
                  >
                    <span
                      class="select-none text-right w-12 shrink-0 px-3 leading-[1.6rem] tabular-nums text-xs"
                      style="color:#3d4451"
                    >{{ idx + 1 }}</span>
                    <span
                      class="pr-10 leading-[1.6rem] whitespace-pre"
                      style="color:#abb2bf"
                      v-html="line"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';

import MapExampleAnalytics from './examples/MapExampleAnalytics.vue';
import MapExampleDelivery  from './examples/MapExampleDelivery.vue';
import MapExampleFlyTo     from './examples/MapExampleFlyTo.vue';
import MapExampleEV        from './examples/MapExampleEV.vue';
import MapExampleTrending  from './examples/MapExampleTrending.vue';
import MapExampleTrail     from './examples/MapExampleTrail.vue';

import analyticsRaw from './examples/MapExampleAnalytics.vue?raw';
import deliveryRaw  from './examples/MapExampleDelivery.vue?raw';
import flytoRaw     from './examples/MapExampleFlyTo.vue?raw';
import evRaw        from './examples/MapExampleEV.vue?raw';
import trendingRaw  from './examples/MapExampleTrending.vue?raw';
import trailRaw     from './examples/MapExampleTrail.vue?raw';

// ── Sidebar docs links ────────────────────────────────────────────────────────
const docLinks = [
  { to: '/docs/installation',   label: 'Installation'  },
  { to: '/docs/basic-map',      label: 'Basic Map'     },
  { to: '/docs/markers',        label: 'Markers'       },
  { to: '/docs/popups',         label: 'Popups'        },
  { to: '/docs/routes',         label: 'Routes'        },
  { to: '/docs/arcs',           label: 'Arcs'          },
  { to: '/docs/clusters',       label: 'Clusters'      },
  { to: '/docs/controls',       label: 'Controls'      },
  { to: '/docs/advanced-usage', label: 'Advanced'      },
];

// ── Syntax highlighter (One Dark palette) ─────────────────────────────────────
function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function sp(color, txt) {
  return `<span style="color:${color}">${txt}</span>`;
}

const T = {
  kw:      '#c678dd',
  vue:     '#61afef',
  str:     '#98c379',
  comment: '#5c6370',
  num:     '#d19a66',
  tag:     '#e06c75',
  section: '#c678dd',
  punct:   '#abb2bf',
};

const KW = new Set([
  'import','from','export','default','const','let','var','function',
  'async','await','return','if','else','for','while','new','class',
  'extends','typeof','instanceof','in','of','try','catch','finally',
  'throw','true','false','null','undefined','this','break','continue',
  'switch','case','do','delete','void','static',
]);

const VUE = new Set([
  'ref','reactive','computed','watch','watchEffect','toRef','toRefs',
  'onMounted','onBeforeUnmount','onUnmounted','onUpdated','onBeforeUpdate',
  'defineProps','defineEmits','defineExpose','provide','inject','nextTick',
  'shallowRef','markRaw','readonly',
]);

function tokenizeLine(line) {
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
      // SFC section tags — no closing tag literal in this comment to avoid parser issues
      const sec = rest.match(/^<\/?(template|script|style)\b[^>]*>/);
      if (sec) {
        out += sp(T.section, esc(sec[0]));
        i += sec[0].length; continue;
      }
      out += sp(T.punct, '&lt;');
      i++;
      if (line[i] === '/') { out += sp(T.punct, '/'); i++; }
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
      if      (KW.has(w))  out += sp(T.kw, w);
      else if (VUE.has(w)) out += sp(T.vue, w);
      else                 out += esc(w);
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

function buildLines(raw) {
  return raw.split('\n').map(line => tokenizeLine(line));
}

// ── Block definitions ─────────────────────────────────────────────────────────
const blockDefs = [
  {
    id: 'analytics',
    title: 'Analytics Map',
    description: 'World map with animated pulse markers showing active users per city.',
    component: MapExampleAnalytics,
    filename: 'MapExampleAnalytics.vue',
    raw: analyticsRaw,
  },
  {
    id: 'delivery',
    title: 'Delivery Tracker',
    description: 'Live route fetched from OSRM with store, truck, and destination markers.',
    component: MapExampleDelivery,
    filename: 'MapExampleDelivery.vue',
    raw: deliveryRaw,
  },
  {
    id: 'flyto',
    title: 'FlyTo Animation',
    description: 'Globe-projected map that flies smoothly to a destination on button press.',
    component: MapExampleFlyTo,
    filename: 'MapExampleFlyTo.vue',
    raw: flytoRaw,
  },
  {
    id: 'ev',
    title: 'EV Stations',
    description: 'Charging station map with available, in-use, and offline status indicators.',
    component: MapExampleEV,
    filename: 'MapExampleEV.vue',
    raw: evRaw,
  },
  {
    id: 'trending',
    title: 'Trending Locations',
    description: 'Popular spots in New York with visitor counts shown on popup open.',
    component: MapExampleTrending,
    filename: 'MapExampleTrending.vue',
    raw: trendingRaw,
  },
  {
    id: 'trail',
    title: 'Trail Map',
    description: 'Outdoor activity route drawn as a GeoJSON line with start and end markers.',
    component: MapExampleTrail,
    filename: 'MapExampleTrail.vue',
    raw: trailRaw,
  },
];

const blocks     = blockDefs.map(b => ({ ...b, codeLines: buildLines(b.raw) }));
const activeTabs = reactive(Object.fromEntries(blocks.map(b => [b.id, 'preview'])));
const copied     = reactive({});
const activeId   = ref(blocks[0]?.id ?? '');

// Scroll to block with header offset
function scrollToBlock(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: 'smooth' });
}

// Track which block is in view to highlight sidebar
let observer = null;
onMounted(() => {
  observer = new IntersectionObserver(
    entries => {
      for (const e of entries) {
        if (e.isIntersecting) activeId.value = e.target.id;
      }
    },
    { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
  );
  blocks.forEach(b => {
    const el = document.getElementById(b.id);
    if (el) observer.observe(el);
  });
});

onBeforeUnmount(() => observer?.disconnect());

async function copyCode(block) {
  try {
    await navigator.clipboard.writeText(block.raw);
    copied[block.id] = true;
    setTimeout(() => { copied[block.id] = false; }, 2000);
  } catch { /* clipboard unavailable */ }
}
</script>

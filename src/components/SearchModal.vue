<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]" @click.self="close">
      <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="close" />
      <div class="relative w-full max-w-lg bg-background border rounded-xl shadow-2xl overflow-hidden">
        <div class="flex items-center gap-3 px-4 border-b">
          <svg class="size-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            ref="inputRef"
            v-model="query"
            type="text"
            placeholder="Search documentation..."
            class="flex-1 h-14 bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground"
            @keydown.escape="close"
            @keydown.down.prevent="moveDown"
            @keydown.up.prevent="moveUp"
            @keydown.enter="select"
          />
          <kbd class="px-2 py-1 text-xs bg-muted rounded">ESC</kbd>
        </div>
        <div class="max-h-80 overflow-y-auto p-2">
          <div v-if="query && filteredResults.length === 0" class="px-3 py-6 text-center text-muted-foreground">
            No results found for "{{ query }}"
          </div>
          <div v-else>
            <div v-for="(group, gIndex) in groupedResults" :key="gIndex" class="mb-2">
              <div class="px-3 py-1 text-xs font-medium text-muted-foreground uppercase">{{ group.name }}</div>
              <button
                v-for="(item, iIndex) in group.items"
                :key="item.path"
                class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-accent transition-colors"
                :class="{ 'bg-accent': selectedIndex === getIndex(gIndex, iIndex) }"
                @click="navigate(item.path)"
                @mouseenter="selectedIndex = getIndex(gIndex, iIndex)"
              >
                <span class="text-2xl" v-if="item.icon">{{ item.icon }}</span>
                <div>
                  <div class="font-medium">{{ item.title }}</div>
                  <div class="text-xs text-muted-foreground">{{ item.description }}</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between px-4 py-2 border-t text-xs text-muted-foreground">
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-1"><kbd class="px-1.5 py-0.5 bg-muted rounded">↑</kbd><kbd class="px-1.5 py-0.5 bg-muted rounded">↓</kbd> Navigate</span>
            <span class="flex items-center gap-1"><kbd class="px-1.5 py-0.5 bg-muted rounded">↵</kbd> Select</span>
          </div>
          <span>Powered by NMapJS</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, nextTick } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isOpen = ref(false);
const query = ref("");
const inputRef = ref(null);
const selectedIndex = ref(0);

const navItems = [
  { name: "Getting Started", icon: "🚀", items: [
    { title: "Installation", path: "/docs/installation", description: "Install and setup NMapJS" },
    { title: "Quick Start", path: "/docs/basic-map", description: "Create your first map" },
  ]},
  { name: "Components", icon: "🧩", items: [
    { title: "Basic Map", path: "/docs/basic-map", description: "Display a simple map" },
    { title: "Markers", path: "/docs/markers", description: "Add markers to maps" },
    { title: "Popups", path: "/docs/popups", description: "Show popups on click" },
    { title: "Routes", path: "/docs/routes", description: "Draw routes and paths" },
    { title: "Arcs", path: "/docs/arcs", description: "Curved arc lines" },
    { title: "Clusters", path: "/docs/clusters", description: "Group nearby points" },
    { title: "Controls", path: "/docs/controls", description: "Map controls and buttons" },
  ]},
  { name: "Features", icon: "✨", items: [
    { title: "Theme", path: "/docs/theme", description: "Light/dark mode support" },
    { title: "Examples", path: "/docs/examples", description: "Pre-built example components" },
    { title: "Geolocation", path: "/docs/geolocation", description: "User location tracking" },
    { title: "Heatmap", path: "/docs/heatmap", description: "Data density visualization" },
    { title: "Directions", path: "/docs/directions", description: "Route calculation with OSRM" },
    { title: "Advanced", path: "/docs/advanced-usage", description: "Advanced usage patterns" },
    { title: "Blocks", path: "/blocks", description: "Ready-to-use blocks" },
  ]},
];

const allItems = computed(() => {
  return navItems.flatMap(g => g.items.map(i => ({ ...i, group: g.name })));
});

const filteredResults = computed(() => {
  if (!query.value) return allItems.value;
  const q = query.value.toLowerCase();
  return allItems.value.filter(i => 
    i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
  );
});

const groupedResults = computed(() => {
  const q = query.value.toLowerCase();
  if (q) {
    return [{
      name: "Results",
      items: filteredResults.value
    }];
  }
  return navItems.map(g => ({
    name: g.name,
    items: g.items
  }));
});

const flatResults = computed(() => filteredResults.value);

function getIndex(gIndex, iIndex) {
  let index = 0;
  for (let i = 0; i < gIndex; i++) {
    index += groupedResults.value[i].items.length;
  }
  return index + iIndex;
}

function moveDown() {
  selectedIndex.value = (selectedIndex.value + 1) % flatResults.value.length;
}

function moveUp() {
  selectedIndex.value = (selectedIndex.value - 1 + flatResults.value.length) % flatResults.value.length;
}

function select() {
  const item = flatResults.value[selectedIndex.value];
  if (item) navigate(item.path);
}

function navigate(path) {
  router.push(path);
  close();
}

function close() {
  isOpen.value = false;
  query.value = "";
  selectedIndex.value = 0;
}

function open() {
  isOpen.value = true;
  nextTick(() => inputRef.value?.focus());
}

watch(isOpen, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
});

defineExpose({ open });

document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    e.preventDefault();
    isOpen.value ? close() : open();
  }
});
</script>
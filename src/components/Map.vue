<template>
  <div class="relative h-full w-full">
    <div ref="containerRef" class="h-full w-full"></div>
    <div v-if="(!isLoaded || loading)" class="bg-background/50 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-xs">
      <div class="flex gap-1">
        <span class="bg-muted-foreground/60 size-1.5 animate-pulse rounded-full" />
        <span class="bg-muted-foreground/60 size-1.5 animate-pulse rounded-full [animation-delay:150ms]" />
        <span class="bg-muted-foreground/60 size-1.5 animate-pulse rounded-full [animation-delay:300ms]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MapLibreGL from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const props = defineProps({
  className: String,
  theme: String,
  center: { type: Array, default: () => [77.209, 28.6139] },
  zoom: { type: Number, default: 10 },
  loading: { type: Boolean, default: false },
  onViewportChange: Function,
});

const containerRef = ref(null);
const mapInstance = ref(null);
const isLoaded = ref(false);

onMounted(() => {
  if (!containerRef.value) return;
  
  const isDark = props.theme === "dark" || document.documentElement.classList.contains("dark") || window.matchMedia("(prefers-color-scheme: dark)").matches;
  const style = isDark 
    ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

  mapInstance.value = new MapLibreGL.Map({
    container: containerRef.value,
    style,
    center: props.center,
    zoom: props.zoom,
  });

  mapInstance.value.on("load", () => { isLoaded.value = true; });
});

onBeforeUnmount(() => {
  if (mapInstance.value) mapInstance.value.remove();
});

defineExpose({ map: mapInstance, isLoaded });
</script>

<style scoped>
.maplibregl-map {
  width: 100%;
  height: 100%;
}
</style>
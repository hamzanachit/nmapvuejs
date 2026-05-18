<template>
  <div :class="cn('relative h-full w-full overflow-hidden rounded-xl border bg-background text-foreground', className)">
    <div ref="mapRef" class="h-full w-full" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MapLibreGL from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { cn } from "../../lib/utils";

const props = defineProps({
  className: String,
  center: { type: Array, default: () => [0, 0] },
  zoom: { type: Number, default: 2 },
  style: { type: String, default: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json" },
});

const mapRef = ref(null);
const map = ref(null);

onMounted(() => {
  if (!mapRef.value) return;
  
  map.value = new MapLibreGL.Map({
    container: mapRef.value,
    style: props.style,
    center: props.center,
    zoom: props.zoom,
    customAttribution: '<a href="https://github.com/hamzanachit/NMapJS" target="_blank">NMapVueJS</a>',
  });
});

defineExpose({ map });
</script>
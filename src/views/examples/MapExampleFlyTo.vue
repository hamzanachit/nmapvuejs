<template>
  <div class="relative w-full overflow-hidden rounded-xl" :style="{ height: props.height }">
    <div ref="mapRef" class="w-full h-full" />
    <button @click="flyToDestination" class="absolute top-2 right-2 z-10 inline-flex items-center justify-center size-8 rounded-md bg-background border border-border shadow-sm hover:bg-accent">
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import MapLibreGL from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { isDark } from "../../composables/useTheme";

const props = defineProps({
  height: { type: String, default: '480px' },
});

const destination = { name: "New York", description: "United States", center: [-74.006, 40.7128], startCenter: [10, 50] };

const mapRef = ref(null);
let map = null;
let marker = null;

const getStyle = () => {
  return isDark.value 
    ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
};

const initMap = () => {
  if (!mapRef.value) return;

  map = new MapLibreGL.Map({
    container: mapRef.value,
    style: getStyle(),
    center: destination.startCenter,
    zoom: 1,
    projection: "globe",
    customAttribution: '<a href="https://github.com/hamzanachit/NMapJS" target="_blank">NMapVueJS</a>',
  });

  map.on("load", () => {
    addMarker();
  });
};

const addMarker = () => {
  if (marker) marker.remove();

  const el = document.createElement("div");
  el.innerHTML = `
    <div class="relative flex items-center justify-center cursor-pointer">
      <div class="absolute size-6 animate-ping rounded-full bg-cyan-500/20" style="animation-duration: 2s;"></div>
      <div class="size-4 rounded-full border-2 border-white bg-cyan-500 shadow-lg"></div>
    </div>
  `;

  const popup = new MapLibreGL.Popup({ offset: 25 }).setHTML(`
    <div class="bg-background text-foreground p-2 rounded text-center border border-border">
      <div class="font-medium">${destination.name}</div>
      <div class="text-[10px] opacity-70">${destination.description}</div>
    </div>
  `);

  marker = new MapLibreGL.Marker({ element: el })
    .setLngLat(destination.center)
    .setPopup(popup)
    .addTo(map);
};

function flyToDestination() {
  map?.flyTo({ center: destination.center, zoom: 12, duration: 2500 });
}

onMounted(() => {
  initMap();
});

watch(isDark, () => {
  if (map) {
    map.setStyle(getStyle());
    setTimeout(addMarker, 100);
  }
});

onBeforeUnmount(() => {
  if (marker) marker.remove();
  if (map) map.remove();
});
</script>
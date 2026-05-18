<template>
  <div class="relative w-full overflow-hidden rounded-xl" :style="{ height: props.height }">
    <div ref="mapRef" class="w-full h-full" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps({
  height: { type: String, default: '480px' },
});
import MapLibreGL from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { isDark } from "../../composables/useTheme";

const stations = [
  { name: "Times Square", lng: -73.9857, lat: 40.7484, visitors: "2.4k" },
  { name: "Central Park", lng: -73.9654, lat: 40.7829, visitors: "1.8k" },
  { name: "Statue of Liberty", lng: -74.0445, lat: 40.6892, visitors: "890" },
];

const mapRef = ref(null);
let map = null;
const markers = [];

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
    center: [-73.99, 40.735],
    zoom: 10,
    customAttribution: '<a href="https://github.com/hamzanachit/NMapJS" target="_blank">NMapVueJS</a>',
  });

  map.on("load", () => {
    addMarkers();
  });
};

const addMarkers = () => {
  markers.forEach(m => m.remove());
  markers.length = 0;

  stations.forEach((station) => {
    const el = document.createElement("div");
    el.innerHTML = `
      <div class="relative flex items-center justify-center cursor-pointer">
        <div class="absolute size-10 rounded-full bg-red-500/20"></div>
        <div class="rounded-full bg-red-500 p-1.5 shadow-lg shadow-red-500/50">
          <svg class="size-3 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
        </div>
      </div>
    `;

    const popup = new MapLibreGL.Popup({ offset: 25 }).setHTML(`
      <div class="bg-background text-foreground p-2 rounded text-center border border-border">
        <div class="font-medium">${station.name}</div>
        <div class="text-xs text-red-500">${station.visitors} visitors</div>
      </div>
    `);

    markers.push(new MapLibreGL.Marker({ element: el })
      .setLngLat([station.lng, station.lat])
      .setPopup(popup)
      .addTo(map));
  });
};

onMounted(() => {
  initMap();
});

watch(isDark, () => {
  if (map) {
    map.setStyle(getStyle());
    setTimeout(addMarkers, 100);
  }
});

onBeforeUnmount(() => {
  markers.forEach(m => m.remove());
  if (map) map.remove();
});
</script>
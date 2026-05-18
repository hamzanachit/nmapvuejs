<template>
  <div class="absolute inset-0">
    <div ref="mapRef" class="w-full h-full" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import MapLibreGL from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { isDark } from "../../composables/useTheme";

const stations = [
  { name: "Union Square", lng: -122.4074, lat: 37.7879, status: "available", detail: "50 kW" },
  { name: "Castro Station", lng: -122.435, lat: 37.7625, status: "in-use", detail: "~15 min" },
  { name: "Hayes Valley", lng: -122.4264, lat: 37.7759, status: "offline", detail: "" },
  { name: "Embarcadero", lng: -122.3934, lat: 37.7935, status: "available", detail: "350 kW" },
];

const statusConfig = {
  available: { bg: "bg-emerald-500", textClass: "text-emerald-500" },
  "in-use": { bg: "bg-amber-500", textClass: "text-amber-500" },
  offline: { bg: "bg-zinc-400", textClass: "text-muted-foreground" },
};

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
    center: [-122.434, 37.776],
    zoom: 11,
  });

  map.on("load", () => {
    addMarkers();
  });
};

const addMarkers = () => {
  markers.forEach(m => m.remove());
  markers.length = 0;

  stations.forEach((station) => {
    const config = statusConfig[station.status];
    const el = document.createElement("div");
    el.innerHTML = `<div class="${config.bg} rounded-full p-1.5 shadow-lg"><svg class="size-3 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div>`;

    const popup = new MapLibreGL.Popup({ offset: 25 }).setHTML(`
      <div class="bg-background text-foreground p-2 rounded text-xs border border-border">
        <div class="font-medium">${station.name}</div>
        <div class="flex items-center gap-1">
          <span class="size-1.5 rounded-full ${config.bg}"></span>
          <span class="${config.textClass}">${station.status}</span>
        </div>
        ${station.detail ? `<div class="opacity-60">${station.detail}</div>` : ""}
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
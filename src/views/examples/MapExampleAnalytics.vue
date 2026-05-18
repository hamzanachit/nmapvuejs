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

const analyticsData = [
  { lng: -74.006, lat: 40.7128, city: "New York", users: 847, size: 14 },
  { lng: -0.1276, lat: 51.5074, city: "London", users: 623, size: 12 },
  { lng: 139.6917, lat: 35.6895, city: "Tokyo", users: 412, size: 10 },
  { lng: -122.4194, lat: 37.7749, city: "San Francisco", users: 298, size: 9 },
  { lng: 2.3522, lat: 48.8566, city: "Paris", users: 187, size: 8 },
  { lng: 77.209, lat: 28.6139, city: "Delhi", users: 156, size: 7 },
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
    center: [0, 30],
    zoom: 1.5,
  });

  map.on("load", () => {
    addMarkers();
  });
};

const addMarkers = () => {
  markers.forEach(m => m.remove());
  markers.length = 0;

  analyticsData.forEach((loc) => {
    const el = document.createElement("div");
    el.innerHTML = `
      <div class="relative flex items-center justify-center cursor-pointer">
        <div class="absolute rounded-full bg-emerald-500/20" style="width: ${loc.size * 2.5}px; height: ${loc.size * 2.5}px;"></div>
        <div class="absolute rounded-full bg-emerald-500/40 animate-ping" style="width: ${loc.size * 1.5}px; height: ${loc.size * 1.5}px; animation-duration: 2s;"></div>
        <div class="relative rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" style="width: ${loc.size}px; height: ${loc.size}px;"></div>
      </div>
    `;

    const popup = new MapLibreGL.Popup({ offset: 25 }).setHTML(`
      <div class="bg-background text-foreground p-2 rounded text-center border border-border">
        <div class="font-medium">${loc.city}</div>
        <div class="font-semibold text-emerald-500">${loc.users}</div>
        <div class="text-[10px] opacity-70">active users</div>
      </div>
    `);

    markers.push(new MapLibreGL.Marker({ element: el })
      .setLngLat([loc.lng, loc.lat])
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
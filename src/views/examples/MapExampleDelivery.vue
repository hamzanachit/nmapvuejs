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

const store = { lng: -0.14, lat: 51.5154 };
const home = { lng: -0.07, lat: 51.51 };

const mapRef = ref(null);
let map = null;
const markers = [];
let routeAdded = false;

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
    center: [-0.105, 51.511],
    zoom: 12.4,
    customAttribution: '<a href="https://github.com/hamzanachit/NMapJS" target="_blank">NMapVueJS</a>',
  });

  map.on("load", () => {
    fetchRoute();
  });
};

const fetchRoute = async () => {
  try {
    const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${store.lng},${store.lat};${home.lng},${home.lat}?overview=full&geometries=geojson`);
    const data = await response.json();

    if (data.routes?.[0]?.geometry?.coordinates) {
      const coords = data.routes[0].geometry.coordinates;
      const truckIdx = Math.floor(coords.length * 0.6);

      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: { type: "LineString", coordinates: coords },
        },
      });

      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        paint: { "line-color": "#4285F4", "line-width": 4 },
      });

      const storeEl = document.createElement("div");
      storeEl.innerHTML = '<div class="size-3.5 rounded-full border-2 border-white bg-emerald-500 shadow-lg"></div>';
      markers.push(new MapLibreGL.Marker({ element: storeEl }).setLngLat([store.lng, store.lat]).addTo(map));

      const truckEl = document.createElement("div");
      truckEl.innerHTML = '<div class="rounded-full bg-blue-500 p-1.5 shadow-lg"><svg class="size-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>';
      markers.push(new MapLibreGL.Marker({ element: truckEl }).setLngLat(coords[truckIdx]).addTo(map));

      const homeEl = document.createElement("div");
      homeEl.innerHTML = '<div class="size-3.5 rounded-full border-2 border-white bg-blue-500 shadow-lg"></div>';
      markers.push(new MapLibreGL.Marker({ element: homeEl }).setLngLat([home.lng, home.lat]).addTo(map));

      routeAdded = true;
    }
  } catch (error) {
    console.error("Failed to fetch route:", error);
  }
};

const reloadRoute = async () => {
  if (map.getLayer("route")) {
    map.removeLayer("route");
  }
  if (map.getSource("route")) {
    map.removeSource("route");
  }
  markers.forEach(m => m.remove());
  markers.length = 0;
  routeAdded = false;
  await fetchRoute();
};

onMounted(() => {
  initMap();
});

watch(isDark, () => {
  if (map) {
    map.setStyle(getStyle());
    setTimeout(reloadRoute, 100);
  }
});

onBeforeUnmount(() => {
  markers.forEach(m => m.remove());
  if (map) map.remove();
});
</script>
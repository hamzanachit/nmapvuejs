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

const trailCoordinates = [
  [-73.95846730810143, 40.80035246904919],
  [-73.9717593682683, 40.78210942124929],
  [-73.98192123136191, 40.76793032580281],
  [-73.97393759456651, 40.76462909128966],
  [-73.97291537521572, 40.765159628993814],
  [-73.96920618484948, 40.7637106622374],
  [-73.96383691302509, 40.77117117897504],
  [-73.9584024523858, 40.76889223221369],
  [-73.9470773638119, 40.784238113060894],
  [-73.95585246901248, 40.78786547226602],
  [-73.94937945594087, 40.79668351998197],
  [-73.9498273526222, 40.797167598041455],
  [-73.95699644240298, 40.80016017872583],
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
    center: [-73.97, 40.782],
    zoom: 12,
    customAttribution: '<a href="https://github.com/hamzanachit/NMapJS" target="_blank">NMapVueJS</a>',
  });

  map.on("load", () => {
    addTrail();
  });
};

const addTrail = () => {
  markers.forEach(m => m.remove());
  markers.length = 0;

  map.addSource("route", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: { type: "LineString", coordinates: trailCoordinates },
    },
  });

  map.addLayer({
    id: "route",
    type: "line",
    source: "route",
    layout: { "line-join": "round", "line-cap": "round" },
    paint: { "line-color": "#10b981", "line-width": 3, "line-opacity": 0.9 },
  });

  const start = trailCoordinates[0];
  const end = trailCoordinates[trailCoordinates.length - 1];

  const startEl = document.createElement("div");
  startEl.innerHTML = '<div class="size-3 rounded-full border-2 border-white bg-emerald-500 shadow-lg"></div>';
  markers.push(new MapLibreGL.Marker({ element: startEl }).setLngLat(start).addTo(map));

  const endEl = document.createElement("div");
  endEl.innerHTML = '<div class="size-3 rounded-full border-2 border-white bg-red-500 shadow-lg"></div>';
  markers.push(new MapLibreGL.Marker({ element: endEl }).setLngLat(end).addTo(map));
};

onMounted(() => {
  initMap();
});

watch(isDark, () => {
  if (map) {
    map.setStyle(getStyle());
    setTimeout(addTrail, 100);
  }
});

onBeforeUnmount(() => {
  markers.forEach(m => m.remove());
  if (map) map.remove();
});
</script>
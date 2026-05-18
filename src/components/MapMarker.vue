<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import MapLibreGL from "maplibre-gl";

const props = defineProps({
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  draggable: { type: Boolean, default: false },
  content: Object,
});

const marker = ref(null);
const mapRef = ref(null);

onMounted(() => {
  const container = document.querySelector(".maplibregl-map");
  if (!container) return;

  marker.value = new MapLibreGL.Marker({ draggable: props.draggable })
    .setLngLat([props.longitude, props.latitude])
    .addTo(mapRef.value);

  if (props.content) {
    const el = document.createElement("div");
    el.innerHTML = props.content;
    marker.value.getElement().appendChild(el);
  }
});

watch(() => [props.longitude, props.latitude], (newVal) => {
  if (marker.value) {
    marker.value.setLngLat(newVal);
  }
});
</script>
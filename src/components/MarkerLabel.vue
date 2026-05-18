<template>
  <!-- Wrapper for maplibre-gl marker label (using HTML element) -->
  <slot />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MapLibreGL from "maplibre-gl";

const props = defineProps({
  /**
   * Longitude of the label
   */
  longitude: {
    type: Number,
    required: true
  },
  /**
   * Latitude of the label
   */
  latitude: {
    type: Number,
    required: true
  },
  /**
   * Offset in pixels
   * @default [0, 0]
   */
  offset: {
    type: Array,
    default: () => [0, 0]
  }
});

const marker = ref(null);

onMounted(() => {
  // The label is typically added as an HTML element to the marker
  // This component is a wrapper for the label content
});

onBeforeUnmount(() => {
  if (marker.value) {
    marker.value.remove();
  }
});

defineExpose({
  marker
});
</script>
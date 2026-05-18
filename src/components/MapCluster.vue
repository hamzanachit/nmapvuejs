<template>
  <!-- Wrapper for maplibre-gl cluster (using Supercluster or similar) -->
  <!-- The clustering logic is implemented in the parent component -->
  <slot />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MapLibreGL from "maplibre-gl";

const props = defineProps({
  /**
   * Whether to enable clustering
   * @default true
   */
  enabled: {
    type: Boolean,
    default: true
  },
  /**
   * Radius of each cluster in pixels
   * @default 50
   */
  radius: {
    type: Number,
    default: 50
  },
  /**
   * Maximum zoom level for clustering
   * Points beyond this zoom are plotted as individual points
   * @default 14
   */
  maxZoom: {
    type: Number,
    default: 14
  }
});

const mapRef = ref(null);

onMounted(() => {
  // Clustering is typically implemented in the parent component using a custom source
  // or using a library like supercluster. This component is a wrapper for documentation.
});

onBeforeUnmount(() => {
  // Cleanup if needed
});

defineExpose({
  mapRef
});
</script>
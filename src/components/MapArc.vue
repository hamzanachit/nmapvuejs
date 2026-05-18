<template>
  <!-- Wrapper for maplibre-gl arc (using a custom GeoJSON source and layer for arcs) -->
  <slot />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MapLibreGL from "maplibre-gl";

const props = defineProps({
  /**
   * Array of arc objects, each with { source: [lng, lat], target: [lng, lat] }
   */
  arcs: {
    type: Array,
    required: true
  },
  /**
   * ID of the source
   * @default 'arcs'
   */
  sourceId: {
    type: String,
    default: 'arcs'
  },
  /**
   * ID of the layer
   * @default 'arcs-layer'
   */
  layerId: {
    type: String,
    default: 'arcs-layer'
  },
  /**
   * Paint properties for the arc lines
   * @default { "line-color": "#3b82f6", "line-width": 2, "line-opacity": 0.8 }
   */
  paint: {
    type: Object,
    default: () => ({
      "line-color": "#3b82f6",
      "line-width": 2,
      "line-opacity": 0.8
    })
  },
  /**
   * Layout properties for the arc lines
   * @default { "line-join": "round", "line-cap": "round" }
   */
  layout: {
    type: Object,
    default: () => ({
      "line-join": "round",
      "line-cap": "round"
    })
  }
});

const mapRef = ref(null);

onMounted(() => {
  // The arcs are added to the map in the parent component
  // This component is a wrapper for documentation purposes
});

onBeforeUnmount(() => {
  // Cleanup if needed
});

defineExpose({
  mapRef
});
</script>
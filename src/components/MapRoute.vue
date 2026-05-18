<template>
  <!-- Wrapper for maplibre-gl route (using GeoJSON source and layer) -->
  <slot />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MapLibreGL from "maplibre-gl";

const props = defineProps({
  /**
   * GeoJSON data for the route
   */
  data: {
    type: Object,
    required: true
  },
  /**
   * ID of the source
   * @default 'route'
   */
  sourceId: {
    type: String,
    default: 'route'
  },
  /**
   * ID of the layer
   * @default 'route-layer'
   */
  layerId: {
    type: String,
    default: 'route-layer'
  },
  /**
   * Paint properties for the route line
   * @default { "line-color": "#10b981", "line-width": 3, "line-opacity": 0.9 }
   */
  paint: {
    type: Object,
    default: () => ({
      "line-color": "#10b981",
      "line-width": 3,
      "line-opacity": 0.9
    })
  },
  /**
   * Layout properties for the route line
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
  // The route is added to the map in the parent component via map.addSource and map.addLayer
  // This component is a wrapper for documentation purposes
});

onBeforeUnmount(() => {
  // Cleanup if needed
});

defineExpose({
  mapRef
});
</script>
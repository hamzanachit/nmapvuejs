<template>
  <!-- Wrapper for maplibre-gl controls (like zoom, rotation) -->
  <!-- The controls are added directly to the map instance in the parent component -->
  <slot />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MapLibreGL from "maplibre-gl";

const props = defineProps({
  /**
   * Whether to show zoom controls
   * @default true
   */
  zoom: {
    type: Boolean,
    default: true
  },
  /**
   * Whether to show rotation controls
   * @default true
   */
  rotate: {
    type: Boolean,
    default: true
  },
  /**
   * Whether to show pitch controls
   * @default false
   */
  pitch: {
    type: Boolean,
    default: false
  }
});

const controls = ref(null);

onMounted(() => {
  // Controls are typically added via map.addControl() in the parent
  // This component is a wrapper for documentation purposes
});

onBeforeUnmount(() => {
  // Cleanup if needed
});

defineExpose({
  controls
});
</script>
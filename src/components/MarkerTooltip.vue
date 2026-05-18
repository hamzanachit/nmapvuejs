<template>
  <!-- Wrapper for maplibre-gl tooltip attached to a marker -->
  <slot />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MapLibreGL from "maplibre-gl";

const props = defineProps({
  /**
   * Longitude of the tooltip
   */
  longitude: {
    type: Number,
    required: true
  },
  /**
   * Latitude of the tooltip
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

const tooltip = ref(null);

onMounted(() => {
  // Tooltip is managed by parent
});

onBeforeUnmount(() => {
  if (tooltip.value) {
    tooltip.value.remove();
  }
});

defineExpose({
  tooltip
});
</script>
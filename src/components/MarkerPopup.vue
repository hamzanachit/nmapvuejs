<template>
  <!-- This component is a wrapper for maplibre-gl popup attached to a marker -->
  <!-- The actual popup is created and managed in the parent component -->
  <slot />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import MapLibreGL from "maplibre-gl";

const props = defineProps({
  /**
   * Longitude of the popup
   */
  longitude: {
    type: Number,
    required: true
  },
  /**
   * Latitude of the popup
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
  },
  /**
   * Whether the popup should close when the user clicks the close button
   * @default true
   */
  closeButton: {
    type: Boolean,
    default: true
  },
  /**
   * Whether the popup should close when the map is clicked
   * @default true
   */
  closeOnClick: {
    type: Boolean,
    default: true
  },
  /**
   * CSS class names for the popup container
   */
  className: {
    type: String,
    default: ""
  }
});

const popup = ref(null);

onMounted(() => {
  // The popup is actually created and managed by the parent component
  // This component is mainly for documentation and type purposes
});

onBeforeUnmount(() => {
  if (popup.value) {
    popup.value.remove();
  }
});

defineExpose({
  popup
});
</script>
<template>
  <!-- This component is a wrapper for MapLibreGL Popup -->
  <!-- The actual popup is created and managed in the parent component -->
  <!-- We render nothing here, but provide a slot for custom content if needed -->
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
  // In practice, users would create the popup directly in their map example
  // But we provide this as a convenience wrapper
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
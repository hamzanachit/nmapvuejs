<template>
  <div class="relative">
    <slot />
  </div>
</template>

<script setup>
/**
 * NMarkerContent - Wrapper for custom marker content
 * 
 * This component is a simple wrapper that can be used to define
 * custom content for NMarker. In practice, the content is usually
 * added directly to the marker element in the parent component.
 */
const props = defineProps({
  /**
   * Optional className for styling
   */
  className: {
    type: String,
    default: ''
  }
});
</script>
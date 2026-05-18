<template>
  <div data-slot="card-footer" :class="cn('flex items-center px-4 [.border-t]:pt-4', className)">
    <slot />
  </div>
</template>

<script setup>
import { cn } from "../../lib/utils";

defineProps({
  className: String,
});
</script>
<template>
  <div :class="cn('flex h-9 items-center gap-1.5 rounded-md border px-3 py-1 text-xs', className)">
    <slot />
  </div>
</template>

<script setup>
import { cn } from "../../lib/utils";

defineProps({
  className: String,
});
</script>
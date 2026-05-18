<template>
  <div data-slot="card-description" :class="cn('text-sm text-muted-foreground', className)">
    <slot />
  </div>
</template>

<script setup>
import { cn } from "../../lib/utils";

defineProps({
  className: String,
});
</script>
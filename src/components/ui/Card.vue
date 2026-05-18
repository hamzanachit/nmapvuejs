<template>
  <div data-slot="card" :class="cn('flex flex-col gap-4 rounded-xl border bg-card py-4 text-card-foreground shadow-sm', className)">
    <slot />
  </div>
</template>

<script setup>
import { cn } from "../../lib/utils";

defineProps({
  className: String,
});
</script>
<template>
  <div data-slot="card-title" :class="cn('leading-none font-semibold', className)">
    <slot />
  </div>
</template>

<script setup>
import { cn } from "../../lib/utils";

defineProps({
  className: String,
});
</script>
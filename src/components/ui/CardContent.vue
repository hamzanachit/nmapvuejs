<template>
  <div data-slot="card-content" :class="cn('px-4', className)">
    <slot />
  </div>
</template>

<script setup>
import { cn } from "../../lib/utils";

defineProps({
  className: String,
});
</script>
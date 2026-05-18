<template>
  <div data-slot="card-header" :class="cn('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4', className)">
    <slot />
  </div>
</template>

<script setup>
import { cn } from "../../lib/utils";

defineProps({
  className: String,
});
</script>
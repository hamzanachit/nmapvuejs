<template>
  <div :class="cn('animate-pulse rounded-md bg-muted', className)" />
</template>

<script setup>
import { cn } from "../../lib/utils";

defineProps({
  className: String,
});
</script>
<template>
  <div :class="cn('bg-background relative flex min-h-9 flex-col justify-center border-b p-4', className)">
    <div v-if="title || action" class="flex items-center justify-between">
      <h3 v-if="title" class="font-semibold">{{ title }}</h3>
      <button v-if="action" @click="$emit('action')" class="text-xs text-muted-foreground hover:text-foreground">
        {{ action }}
      </button>
    </div>
    <div v-if="description" class="mt-1 text-sm text-muted-foreground">{{ description }}</div>
    <slot />
  </div>
</template>

<script setup>
import { cn } from "../../lib/utils";

defineProps({
  className: String,
  title: String,
  description: String,
  action: String,
});

defineEmits(["action"]);
</script>
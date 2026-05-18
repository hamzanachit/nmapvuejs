<template>
  <div class="container py-16">
    <h1 class="text-4xl font-bold mb-4">Map Example</h1>
    <p class="text-muted-foreground mb-8">Interactive map with markers, routes, and controls.</p>
    
    <div class="rounded-xl border overflow-hidden">
      <div class="h-[600px]">
        <MapExample />
      </div>
    </div>
  </div>
</template>

<script setup>
import MapExample from "./examples/MapExample.vue";
</script>
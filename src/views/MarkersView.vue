<template>
  <div class="flex h-full">
    <aside class="w-64 border-r p-4 hidden lg:block">
      <h3 class="font-semibold mb-4">Components</h3>
      <nav class="space-y-1">
        <RouterLink to="/docs/installation" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Installation</RouterLink>
        <RouterLink to="/docs/basic-map" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Basic Map</RouterLink>
        <RouterLink to="/docs/markers" class="block px-3 py-2 rounded-md text-sm bg-accent">Markers</RouterLink>
        <RouterLink to="/docs/popups" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Popups</RouterLink>
        <RouterLink to="/docs/routes" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Routes</RouterLink>
        <RouterLink to="/docs/arcs" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Arcs</RouterLink>
        <RouterLink to="/docs/clusters" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Clusters</RouterLink>
        <RouterLink to="/docs/controls" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Controls</RouterLink>
        <RouterLink to="/docs/geolocation" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Geolocation</RouterLink>
        <RouterLink to="/docs/heatmap" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Heatmap</RouterLink>
        <RouterLink to="/docs/directions" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Directions</RouterLink>
        <RouterLink to="/docs/advanced-usage" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Advanced</RouterLink>
      </nav>
    </aside>
    <div class="flex-1 p-8">
      <div class="max-w-3xl">
        <h1 class="text-3xl font-bold mb-4">Markers</h1>
        <p class="text-muted-foreground mb-8">Add markers to your map with custom content, popups, and drag support.</p>

        <div class="rounded-xl border overflow-hidden mb-8">
          <div class="h-[400px]">
            <Map :center="[77.209, 28.6139]" :zoom="10">
              <MapMarker :longitude="77.209" :latitude="28.6139" />
              <MapMarker :longitude="77.1025" :latitude="28.7041" />
            </Map>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold mb-3">Usage</h2>
            <CodeBlock :code="codeUsage" lang="vue" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Map from '../components/Map.vue';
import MapMarker from '../components/MapMarker.vue';
import CodeBlock from '../components/ui/CodeBlock.vue';

const codeUsage = [
  '<Map :center="[77.209, 28.6139]" :zoom="10">',
  '  <MapMarker :longitude="77.209" :latitude="28.6139" />',
  '  <MapMarker :longitude="77.1025" :latitude="28.7041" />',
  '</Map>',
].join('\n');
</script>

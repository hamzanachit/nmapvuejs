<template>
  <div class="flex h-full">
    <aside class="w-64 border-r p-4 hidden lg:block">
      <h3 class="font-semibold mb-4">Components</h3>
      <nav class="space-y-1">
        <RouterLink to="/docs/installation" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Installation</RouterLink>
        <RouterLink to="/docs/basic-map" class="block px-3 py-2 rounded-md text-sm bg-accent">Basic Map</RouterLink>
        <RouterLink to="/docs/markers" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Markers</RouterLink>
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
        <h1 class="text-3xl font-bold mb-4">Basic Map</h1>
        <p class="text-muted-foreground mb-8">The NMap component is the foundation of NMapVueJS. It provides a full-screen map with theme detection and sensible defaults.</p>

        <div class="rounded-xl border overflow-hidden mb-8">
          <div class="h-[400px]">
            <NMap :center="[77.209, 28.6139]" :zoom="10" />
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold mb-3">Usage</h2>
            <CodeBlock :code="codeUsage" lang="vue" />
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-3">Props</h2>
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b">
                  <th class="text-left py-2 px-4">Prop</th>
                  <th class="text-left py-2 px-4">Type</th>
                  <th class="text-left py-2 px-4">Default</th>
                  <th class="text-left py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="py-2 px-4 font-mono">center</td>
                  <td class="py-2 px-4">Array</td>
                  <td class="py-2 px-4">[77.209, 28.6139]</td>
                  <td class="py-2 px-4">Initial center [lng, lat]</td>
                </tr>
                <tr class="border-b">
                  <td class="py-2 px-4 font-mono">zoom</td>
                  <td class="py-2 px-4">Number</td>
                  <td class="py-2 px-4">10</td>
                  <td class="py-2 px-4">Initial zoom level</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 font-mono">theme</td>
                  <td class="py-2 px-4">String</td>
                  <td class="py-2 px-4">"dark"</td>
                  <td class="py-2 px-4">"light" or "dark"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import NMap from '../components/Map.vue';
import CodeBlock from '../components/ui/CodeBlock.vue';

const codeUsage = [
  '<template>',
  '  <NMap :center="[77.209, 28.6139]" :zoom="10" />',
  '</template>',
  '',
  '<script setup>',
  'import { NMap } from \'nmapvuejs\'',
  '<\/script>',
].join('\n');
</script>

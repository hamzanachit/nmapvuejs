<template>
  <div class="flex h-full">
    <aside class="w-64 border-r p-4 hidden lg:block">
      <h3 class="font-semibold mb-4">Components</h3>
      <nav class="space-y-1">
        <RouterLink to="/docs/installation" class="block px-3 py-2 rounded-md text-sm bg-accent">Installation</RouterLink>
        <RouterLink to="/docs/basic-map" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Basic Map</RouterLink>
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
        <h1 class="text-3xl font-bold mb-4">Installation</h1>
        <p class="text-muted-foreground mb-8">Get started with NMapVueJS in your Vue.js project.</p>

        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold mb-3">1. Install via npm</h2>
            <CodeBlock :code="codeInstall" lang="bash" maxH="80px" />
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-3">2. Import components</h2>
            <CodeBlock :code="codeImport" lang="js" maxH="80px" />
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-3">3. Use in your template</h2>
            <CodeBlock :code="codeUsage" lang="vue" maxH="160px" />
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-3">Requirements</h2>
            <ul class="list-disc list-inside text-muted-foreground space-y-2">
              <li>Vue 3.x</li>
              <li>MapLibre GL 3.x or 4.x</li>
              <li>Tailwind CSS (optional, for styling)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import CodeBlock from '../components/ui/CodeBlock.vue';

const codeInstall = 'npm install nmapvuejs';

const codeImport = 'import { NMap, NMarker } from "nmapvuejs";';

const codeUsage = [
  '<template>',
  '  <NMap :center="[77.209, 28.6139]" :zoom="10">',
  '    <NMarker :longitude="77.209" :latitude="28.6139" />',
  '  </NMap>',
  '</template>',
].join('\n');
</script>

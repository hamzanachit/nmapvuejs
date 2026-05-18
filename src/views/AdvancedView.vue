<template>
  <div class="flex h-full">
    <aside class="w-64 border-r p-4 hidden lg:block">
      <h3 class="font-semibold mb-4">Components</h3>
      <nav class="space-y-1">
        <RouterLink to="/docs/installation" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Installation</RouterLink>
        <RouterLink to="/docs/basic-map" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Basic Map</RouterLink>
        <RouterLink to="/docs/markers" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Markers</RouterLink>
        <RouterLink to="/docs/popups" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Popups</RouterLink>
        <RouterLink to="/docs/routes" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Routes</RouterLink>
        <RouterLink to="/docs/arcs" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Arcs</RouterLink>
        <RouterLink to="/docs/clusters" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Clusters</RouterLink>
        <RouterLink to="/docs/controls" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Controls</RouterLink>
        <RouterLink to="/docs/theme" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Theme</RouterLink>
        <RouterLink to="/docs/examples" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Examples</RouterLink>
        <RouterLink to="/docs/geolocation" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Geolocation</RouterLink>
        <RouterLink to="/docs/heatmap" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Heatmap</RouterLink>
        <RouterLink to="/docs/directions" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Directions</RouterLink>
        <RouterLink to="/docs/advanced-usage" class="block px-3 py-2 rounded-md text-sm bg-accent">Advanced</RouterLink>
      </nav>
    </aside>
    <div class="flex-1 p-8">
      <div class="max-w-3xl">
        <h1 class="text-3xl font-bold mb-4">Advanced Usage</h1>
        <p class="text-muted-foreground mb-8">Learn advanced configuration options and patterns.</p>

        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold mb-3">Custom Styles</h2>
            <p class="text-muted-foreground mb-4">You can provide custom map styles for light and dark themes.</p>
            <CodeBlock :code="codeStyles" lang="vue" />
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-3">Viewport Control</h2>
            <p class="text-muted-foreground mb-4">Control the map viewport programmatically.</p>
            <CodeBlock :code="codeViewport" lang="vue" />
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-3">Projection</h2>
            <p class="text-muted-foreground mb-4">Use globe projection for 3D globe view.</p>
            <CodeBlock :code="codeProjection" lang="vue" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import CodeBlock from '../components/ui/CodeBlock.vue';

const codeStyles = [
  '<Map :styles="{',
  "  light: 'https://your-style.json',",
  "  dark: 'https://your-dark-style.json'",
  '}" />',
].join('\n');

const codeViewport = '<Map :viewport="{ center: [0, 0], zoom: 10 }" />';

const codeProjection = '<Map :projection="{ type: \'globe\' }" />';
</script>

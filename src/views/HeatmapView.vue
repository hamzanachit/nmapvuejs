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
        <RouterLink to="/docs/heatmap" class="block px-3 py-2 rounded-md text-sm bg-accent">Heatmap</RouterLink>
        <RouterLink to="/docs/directions" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Directions</RouterLink>
        <RouterLink to="/docs/advanced-usage" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Advanced</RouterLink>
      </nav>
    </aside>

    <div class="flex-1 container py-16 max-w-4xl">
      <h1 class="text-4xl font-bold mb-6">Heatmap</h1>
      <p class="text-lg text-muted-foreground mb-8">
        Visualize data density with beautiful heatmap layers.
      </p>

      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Basic Heatmap</h2>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>map.addLayer({
  id: 'heatmap-layer',
  type: 'heatmap',
  source: 'points',
  paint: {
    'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
    'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 15, 3],
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0, 'rgba(0,0,0,0)',
      0.2, '#ffffb2',
      0.4, '#fed976',
      0.6, '#feb24c',
      0.8, '#f03b20',
      1, '#bd0026'
    ],
    'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 15, 20],
    'heatmap-opacity': 0.8
  }
})</code></pre>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Heatmap Properties</h2>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="text-left py-2">Property</th>
                <th class="text-left py-2">Type</th>
                <th class="text-left py-2">Description</th>
              </tr>
            </thead>
            <tbody class="text-muted-foreground">
              <tr class="border-b"><td class="py-2">heatmap-weight</td><td>number/expression</td><td>Weight of each point</td></tr>
              <tr class="border-b"><td class="py-2">heatmap-intensity</td><td>number/expression</td><td>Intensity by zoom</td></tr>
              <tr class="border-b"><td class="py-2">heatmap-color</td><td>color/expression</td><td>Color gradient</td></tr>
              <tr class="border-b"><td class="py-2">heatmap-radius</td><td>number/expression</td><td>Radius by zoom</td></tr>
              <tr><td class="py-2">heatmap-opacity</td><td>number/expression</td><td>Layer opacity</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Add GeoJSON Source</h2>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>map.addSource('points', {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { mag: 1 },
        geometry: { type: 'Point', coordinates: [-74, 40.7] }
      },
      {
        type: 'Feature',
        properties: { mag: 3 },
        geometry: { type: 'Point', coordinates: [-73.9, 40.8] }
      }
    ]
  }
})</code></pre>
        </section>
      </div>

      <div class="mt-12 flex justify-between">
        <RouterLink to="/docs/geolocation" class="text-primary hover:underline">← Geolocation</RouterLink>
        <RouterLink to="/docs/directions" class="text-primary hover:underline">Directions →</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
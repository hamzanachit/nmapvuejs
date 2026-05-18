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
        <RouterLink to="/docs/advanced-usage" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Advanced</RouterLink>
      </nav>
    </aside>

    <div class="flex-1 container py-16 max-w-4xl">
      <h1 class="text-4xl font-bold mb-6">Geolocation</h1>
      <p class="text-lg text-muted-foreground mb-8">
        Track user location and display real-time position on the map.
      </p>

      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>import { ref, onMounted, onBeforeUnmount } from 'vue'
import MapLibreGL from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const mapRef = ref(null)
let map = null
let geoMarker = null

onMounted(() => {
  map = new MapLibreGL.Map({
    container: mapRef.value,
    style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
    center: [0, 0],
    zoom: 2
  })

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (position) => {
        const { longitude, latitude } = position.coords
        
        if (geoMarker) geoMarker.remove()
        
        geoMarker = new MapLibreGL.Marker({ color: '#22c55e' })
          .setLngLat([longitude, latitude])
          .addTo(map)
        
        map.flyTo({ center: [longitude, latitude], zoom: 14 })
      },
      (error) => console.error(error),
      { enableHighAccuracy: true }
    )
  }
})</code></pre>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Geolocation Options</h2>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="text-left py-2">Option</th>
                <th class="text-left py-2">Type</th>
                <th class="text-left py-2">Description</th>
              </tr>
            </thead>
            <tbody class="text-muted-foreground">
              <tr class="border-b"><td class="py-2">enableHighAccuracy</td><td>boolean</td><td>High precision mode</td></tr>
              <tr class="border-b"><td class="py-2">timeout</td><td>number</td><td>Maximum wait time (ms)</td></tr>
              <tr><td class="py-2">maximumAge</td><td>number</td><td>Cache duration (ms)</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Custom User Marker</h2>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>const el = document.createElement('div')
el.innerHTML = `
  &lt;div class="relative"&gt;
    &lt;div class="size-4 rounded-full bg-blue-500 border-2 border-white shadow-lg"&gt;&lt;/div&gt;
    &lt;div class="absolute inset-0 rounded-full bg-blue-500/30 animate-ping"&gt;&lt;/div&gt;
  &lt;/div&gt;
`

geoMarker = new MapLibreGL.Marker({ element: el })
  .setLngLat([longitude, latitude])
  .addTo(map)</code></pre>
        </section>
      </div>

      <div class="mt-12 flex justify-between">
        <RouterLink to="/docs/examples" class="text-primary hover:underline">← Examples</RouterLink>
        <RouterLink to="/docs/heatmap" class="text-primary hover:underline">Heatmap →</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
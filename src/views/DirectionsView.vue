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
        <RouterLink to="/docs/directions" class="block px-3 py-2 rounded-md text-sm bg-accent">Directions</RouterLink>
        <RouterLink to="/docs/advanced-usage" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Advanced</RouterLink>
      </nav>
    </aside>

    <div class="flex-1 container py-16 max-w-4xl">
      <h1 class="text-4xl font-bold mb-6">Directions</h1>
      <p class="text-lg text-muted-foreground mb-8">
        Calculate routes and display turn-by-turn directions using OSRM.
      </p>

      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Basic Route</h2>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>const fetchRoute = async (start, end) => {
  const response = await fetch(
    `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`
  )
  const data = await response.json()
  
  return data.routes[0].geometry.coordinates
}

const coords = await fetchRoute(
  { lng: -74.006, lat: 40.7128 },  // New York
  { lng: -0.1276, lat: 51.5074 }   // London
)

map.addSource('route', {
  type: 'geojson',
  data: {
    type: 'Feature',
    properties: {},
    geometry: { type: 'LineString', coordinates: coords }
  }
})

map.addLayer({
  id: 'route',
  type: 'line',
  source: 'route',
  paint: { 'line-color': '#3b82f6', 'line-width': 4 }
})</code></pre>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Route Options</h2>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="text-left py-2">Option</th>
                <th class="text-left py-2">Values</th>
                <th class="text-left py-2">Description</th>
              </tr>
            </thead>
            <tbody class="text-muted-foreground">
              <tr class="border-b"><td class="py-2">overview</td><td>full/simplified/false</td><td>Route geometry detail</td></tr>
              <tr class="border-b"><td class="py-2">geometries</td><td>polyline/geojson</td><td>Coordinate format</td></tr>
              <tr class="border-b"><td class="py-2">steps</td><td>true/false</td><td>Include turn-by-turn</td></tr>
              <tr><td class="py-2">alternatives</td><td>true/false/number</td><td>Alternative routes</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Interactive Waypoints</h2>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>const waypoints = []
let routeLayer = null

map.on('click', (e) => {
  waypoints.push([e.lngLat.lng, e.lngLat.lat])
  
  new MapLibreGL.Marker()
    .setLngLat([e.lngLat.lng, e.lngLat.lat])
    .addTo(map)
  
  if (waypoints.length >= 2) {
    const waypointStr = waypoints.map(w => w.join(',')).join(';')
    fetchRoute(waypointStr)
  }
})</code></pre>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Route Information</h2>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>const route = data.routes[0]
console.log({
  distance: route.distance,      // meters
  duration: route.duration,      // seconds
  geometry: route.geometry       // coordinates
})

// Calculate distance in km
const distanceKm = (route.distance / 1000).toFixed(1)

// Calculate duration in hours/minutes
const hours = Math.floor(route.duration / 3600)
const minutes = Math.floor((route.duration % 3600) / 60)</code></pre>
        </section>
      </div>

      <div class="mt-12 flex justify-between">
        <RouterLink to="/docs/heatmap" class="text-primary hover:underline">← Heatmap</RouterLink>
        <RouterLink to="/docs/advanced-usage" class="text-primary hover:underline">Advanced →</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
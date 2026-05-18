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
        <RouterLink to="/docs/examples" class="block px-3 py-2 rounded-md text-sm bg-accent">Examples</RouterLink>
        <RouterLink to="/docs/geolocation" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Geolocation</RouterLink>
        <RouterLink to="/docs/heatmap" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Heatmap</RouterLink>
        <RouterLink to="/docs/directions" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Directions</RouterLink>
        <RouterLink to="/docs/advanced-usage" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Advanced</RouterLink>
      </nav>
    </aside>

    <div class="flex-1 container py-16 max-w-4xl">
      <h1 class="text-4xl font-bold mb-6">Examples</h1>
      <p class="text-lg text-muted-foreground mb-8">
        Explore pre-built map examples demonstrating common use cases and patterns.
      </p>

      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Analytics Map</h2>
          <p class="text-muted-foreground mb-4">
            Display user analytics with pulsing markers across the globe. Perfect for dashboards showing real-time data.
          </p>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>import MapExampleAnalytics from './examples/MapExampleAnalytics.vue'

&lt;template&gt;
  &lt;div class="h-[300px] relative"&gt;
    &lt;MapExampleAnalytics /&gt;
    &lt;div class="absolute top-3 left-3 bg-background/95 p-3 rounded-lg"&gt;
      &lt;div class="text-sm text-muted-foreground"&gt;Live Users&lt;/div&gt;
      &lt;div class="text-2xl font-semibold"&gt;3,421&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Trail Map</h2>
          <p class="text-muted-foreground mb-4">
            Visualize hiking, running, or cycling routes with start/end markers and elevation data.
          </p>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>import MapExampleTrail from './examples/MapExampleTrail.vue'

// Trail coordinates (longitude, latitude pairs)
const trailCoordinates = [
  [-73.958, 40.800],
  [-73.971, 40.782],
  [-73.981, 40.768],
  // ... more points
]</code></pre>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">FlyTo Animation</h2>
          <p class="text-muted-foreground mb-4">
            Globe-projected map with smooth fly-to animations between locations.
          </p>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>import MapExampleFlyTo from './examples/MapExampleFlyTo.vue'

// Trigger fly-to programmatically
function flyToDestination() {
  map.flyTo({
    center: [-74.006, 40.7128],
    zoom: 12,
    duration: 2500
  })
}</code></pre>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">EV Charging Stations</h2>
          <p class="text-muted-foreground mb-4">
            Display charging stations with status indicators (available, in-use, offline).
          </p>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>const stations = [
  { name: "Union Square", lng: -122.4074, lat: 37.7879, status: "available" },
  { name: "Castro Station", lng: -122.435, lat: 37.7625, status: "in-use" },
  { name: "Hayes Valley", lng: -122.4264, lat: 37.7759, status: "offline" }
]</code></pre>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Trending Hotspots</h2>
          <p class="text-muted-foreground mb-4">
            Show trending locations with fire icon markers and visitor counts.
          </p>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>const hotspots = [
  { name: "Times Square", lng: -73.9857, lat: 40.7484, visitors: "2.4k" },
  { name: "Central Park", lng: -73.9654, lat: 40.7829, visitors: "1.8k" }
]</code></pre>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Delivery Tracking</h2>
          <p class="text-muted-foreground mb-4">
            Real-time delivery tracking with route visualization using the OSRM routing API.
          </p>
          <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>import MapExampleDelivery from './examples/MapExampleDelivery.vue'

// Fetch route from OSRM
const response = await fetch(
  `https://router.project-osrm.org/route/v1/driving/${storeLng},${storeLat};${homeLng},${homeLat}?overview=full&geometries=geojson`
)
const data = await response.json()
const coords = data.routes[0].geometry.coordinates</code></pre>
        </section>
      </div>

      <div class="mt-12 flex justify-between">
        <RouterLink to="/docs/theme" class="text-primary hover:underline">← Theme</RouterLink>
        <RouterLink to="/docs/advanced-usage" class="text-primary hover:underline">Advanced →</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
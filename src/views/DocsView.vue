<template>
  <div class="flex h-full">
    <aside class="w-64 border-r p-4 hidden lg:block">
      <h3 class="font-semibold mb-4">Documentation</h3>
      <nav class="space-y-1">
        <RouterLink v-for="item in docsNav" :key="item.href" :to="item.href" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">
          {{ item.title }}
        </RouterLink>
      </nav>
    </aside>
    <div class="flex-1 p-8">
      <div class="max-w-3xl">
        <h1 class="text-3xl font-bold mb-4">NMapJS Documentation</h1>
        <p class="text-muted-foreground mb-8">Beautiful map components for Vue.js. Free & open-source.</p>
        
        <div class="space-y-4">
          <RouterLink v-for="item in docsNav" :key="item.href" :to="item.href" class="block p-4 rounded-lg border hover:bg-accent">
            <h3 class="font-semibold">{{ item.title }}</h3>
            <p class="text-sm text-muted-foreground mt-1">{{ item.description }}</p>
          </RouterLink>
        </div>

        <div class="mt-12 p-6 rounded-lg border bg-card">
          <h2 class="font-semibold mb-2">Quick Install</h2>
          <pre class="bg-muted p-4 rounded-lg text-sm overflow-x-auto">npm install nmapjs</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const docsNav = [
  { title: "Installation", href: "/docs/installation", description: "Get started with NMapJS in your project" },
  { title: "Basic Map", href: "/docs/basic-map", description: "Learn the basics of the NMap component" },
  { title: "Markers", href: "/docs/markers", description: "Add markers to your map" },
  { title: "Popups", href: "/docs/popups", description: "Display popups on markers" },
  { title: "Routes", href: "/docs/routes", description: "Draw routes and paths" },
  { title: "Arcs", href: "/docs/arcs", description: "Create curved arc lines" },
  { title: "Clusters", href: "/docs/clusters", description: "Cluster multiple points" },
  { title: "Controls", href: "/docs/controls", description: "Add map controls" },
  { title: "Advanced Usage", href: "/docs/advanced-usage", description: "Advanced configuration" },
];
</script>
<template>
  <div>
    <!-- Hero Section - NMapVueJS Original Design -->
    <section class="max-w-[1440px] mx-auto text-center py-16 lg:py-20 px-6">
      <div class="inline-flex items-center gap-2 h-8 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
        <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
        Now with Vue 3 Support
      </div>
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-foreground md:leading-relaxed mb-6">
        Maps that ship,<br/>not just impress
      </h1>
      <p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
        Free & open-source, ready-to-use, customizable map components for Vue.js.
        <br />Built on MapLibre GL. Styled with Tailwind CSS.
      </p>
      <div class="mt-10 flex gap-4 justify-center flex-wrap">
        <a href="/docs" class="inline-flex items-center justify-center h-10 px-6 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          <svg class="size-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Get Started
        </a>
        <a href="/docs/basic-map" class="inline-flex items-center justify-center h-10 px-6 rounded-md text-sm font-medium border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
          View Components
        </a>
      </div>
      
      <!-- Tech Stack Badges -->
      <div class="mt-12 flex items-center justify-center gap-6 flex-wrap">
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
          <svg class="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.5 6.5v11L12 24l10.5-6.5v-11L12 0z"/></svg>
          Vue 3
        </div>
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
          <svg class="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm-1 17.9c-3.3 0-6-2.7-6-6s2.7-6 6-6c1.1 0 2.2.3 3.1.8l-3.6 3.6c-.2.2-.2.5 0 .7l2.2 2.2c.2.2.5.2.7 0l3.6-3.6c.5.9.8 2 .8 3.1 0 3.3-2.7 6-6 6z"/></svg>
          MapLibre GL
        </div>
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
          <svg class="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          Tailwind CSS
        </div>
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
          <svg class="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          TypeScript Ready
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="max-w-[1440px] mx-auto pb-24 px-6">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Why NMapVueJS?</h2>
        <p class="text-muted-foreground max-w-xl mx-auto">Powerful map components designed specifically for Vue.js developers.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div class="bg-card text-card-foreground rounded-xl border border-border p-6">
          <div class="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg class="size-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3 class="font-semibold mb-2">Easy to Use</h3>
          <p class="text-sm text-muted-foreground">Simple API that feels natural in Vue.js. Just import and start building.</p>
        </div>
        
        <div class="bg-card text-card-foreground rounded-xl border border-border p-6">
          <div class="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg class="size-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
          </div>
          <h3 class="font-semibold mb-2">Customizable</h3>
          <p class="text-sm text-muted-foreground">Full control over markers, routes, popups, and styling with Tailwind CSS.</p>
        </div>
        
        <div class="bg-card text-card-foreground rounded-xl border border-border p-6">
          <div class="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg class="size-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          </div>
          <h3 class="font-semibold mb-2">Lightweight</h3>
          <p class="text-sm text-muted-foreground">No heavy dependencies. Built on top of MapLibre GL for performance.</p>
        </div>
      </div>
    </section>

    <!-- Examples Grid - Original NMapVueJS Examples -->
    <section class="max-w-[1440px] mx-auto pb-24 px-6">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">See It In Action</h2>
        <p class="text-muted-foreground max-w-xl mx-auto">Interactive examples showing what NMapVueJS can do.</p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <!-- Analytics Card -->
        <div class="sm:col-span-2 bg-card text-card-foreground rounded-xl border border-border shadow-sm overflow-hidden relative h-[300px]">
          <div class="bg-background/95 border border-border absolute top-3 left-3 z-10 rounded-lg p-3 shadow-lg backdrop-blur-md">
            <div class="text-muted-foreground mb-1 text-[10px] tracking-wider uppercase">Live Analytics</div>
            <div class="text-2xl leading-tight font-semibold">3,421</div>
            <div class="mt-1 flex items-center gap-1">
              <svg class="size-3 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
              </svg>
              <span class="text-xs text-emerald-500">+18.2%</span>
              <span class="text-muted-foreground text-xs">requests/sec</span>
            </div>
          </div>
          <MapExampleAnalytics />
        </div>

        <!-- Trail Card -->
        <div class="bg-card text-card-foreground rounded-xl border border-border shadow-sm overflow-hidden relative h-[300px]">
          <div class="bg-background/95 border border-border absolute top-3 left-3 z-10 rounded-lg p-3 shadow-lg backdrop-blur-md">
            <div class="mb-2 flex items-center gap-1.5">
              <svg class="size-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                <path d="M2 12h20"/>
              </svg>
              <span class="text-xs font-medium">Trail Map</span>
            </div>
            <div class="grid grid-cols-3 gap-3 text-center">
              <div>
                <div class="text-muted-foreground mb-0.5 text-[9px] uppercase">Distance</div>
                <div class="text-sm font-semibold">5.8 km</div>
              </div>
              <div>
                <div class="text-muted-foreground mb-0.5 text-[9px] uppercase">Elevation</div>
                <div class="text-sm font-semibold">+124m</div>
              </div>
              <div>
                <div class="text-muted-foreground mb-0.5 text-[9px] uppercase">Duration</div>
                <div class="text-sm font-semibold">45min</div>
              </div>
            </div>
          </div>
          <MapExampleTrail />
        </div>

        <!-- FlyTo Card -->
        <div class="bg-card text-card-foreground rounded-xl border border-border shadow-sm overflow-hidden relative h-[300px]">
          <div class="bg-background/95 border border-border absolute top-3 left-3 z-10 rounded-lg p-3 shadow-lg backdrop-blur-md">
            <div class="flex items-center gap-1.5">
              <svg class="size-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span class="text-xs font-medium">FlyTo Animation</span>
            </div>
            <div class="text-muted-foreground mt-1 text-[9px] uppercase">Click button to fly</div>
          </div>
          <MapExampleFlyTo />
        </div>

        <!-- EV Charging Card -->
        <div class="bg-card text-card-foreground rounded-xl border border-border shadow-sm overflow-hidden relative h-[300px]">
          <div class="bg-background/95 border border-border absolute top-3 left-3 z-10 rounded-lg p-3 shadow-lg backdrop-blur-md">
            <div class="mb-2 flex items-center gap-1.5">
              <svg class="size-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              <span class="text-xs font-medium">EV Stations</span>
            </div>
            <div class="flex items-center gap-1">
              <span class="size-1.5 rounded-full bg-emerald-500"></span>
              <span class="text-xs text-muted-foreground">12 available</span>
            </div>
          </div>
          <MapExampleEV />
        </div>

        <!-- Trending Card -->
        <div class="bg-card text-card-foreground rounded-xl border border-border shadow-sm overflow-hidden relative h-[300px]">
          <div class="bg-background/95 border border-border absolute top-3 left-3 z-10 rounded-lg p-3 shadow-lg backdrop-blur-md">
            <div class="mb-2 flex items-center gap-1.5">
              <svg class="size-3.5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
              </svg>
              <span class="text-xs font-medium">Trending Locations</span>
            </div>
            <div class="text-muted-foreground text-[9px] uppercase">Top 5 hotspots</div>
          </div>
          <MapExampleTrending />
        </div>

        <!-- Delivery Card -->
        <div class="sm:col-span-2 bg-card text-card-foreground rounded-xl border border-border shadow-sm overflow-hidden relative h-[300px]">
          <div class="bg-background/95 border border-border absolute top-3 left-3 z-10 rounded-lg p-3 shadow-lg backdrop-blur-md">
            <div class="mb-2 flex items-center gap-1.5">
              <svg class="size-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10 17h4V5H2v12h3"/>
                <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/>
                <circle cx="7.5" cy="17.5" r="2.5"/>
                <circle cx="17.5" cy="17.5" r="2.5"/>
              </svg>
              <span class="text-xs font-medium">Live Tracking</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-semibold">Est. 8 min</span>
              <span class="text-muted-foreground text-xs">3.2 km away</span>
            </div>
          </div>
          <MapExampleDelivery />
        </div>

      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="max-w-[1440px] mx-auto pb-24 px-6">
      <div class="bg-card text-card-foreground rounded-2xl border border-border p-12 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Ready to build?</h2>
        <p class="text-muted-foreground max-w-xl mx-auto mb-8">
          Get started with NMapVueJS today. Free, open-source, and built for Vue.js developers.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <a href="/docs" class="inline-flex items-center justify-center h-10 px-6 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Read the Docs
          </a>
          <a href="https://github.com/hamzanachit/nmapvuejs" target="_blank" rel="noopener" class="inline-flex items-center justify-center h-10 px-6 rounded-md text-sm font-medium border border-input bg-background shadow-sm hover:bg-accent transition-colors">
            <svg class="size-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import MapExampleAnalytics from "./examples/MapExampleAnalytics.vue";
import MapExampleTrail from "./examples/MapExampleTrail.vue";
import MapExampleFlyTo from "./examples/MapExampleFlyTo.vue";
import MapExampleEV from "./examples/MapExampleEV.vue";
import MapExampleTrending from "./examples/MapExampleTrending.vue";
import MapExampleDelivery from "./examples/MapExampleDelivery.vue";
</script>
<template>
  <div :class="{ 'dark': state.isDark.value }">
    <div class="min-h-screen bg-background text-foreground transition-colors duration-200">
      <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div class="flex items-center justify-between max-w-[1440px] mx-auto px-6 py-4">
          <a href="/" class="flex items-center gap-2 text-base font-bold">
            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            NMapJS
          </a>
          <nav class="flex items-center gap-6">
            <a href="/docs" class="text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</a>
            <a href="/docs/basic-map" class="text-sm text-muted-foreground hover:text-foreground transition-colors">Components</a>
            <a href="/blocks" class="text-sm text-muted-foreground hover:text-foreground transition-colors">Blocks</a>
          </nav>
          <div class="flex items-center gap-4">
            <button @click="searchModal?.open()" class="inline-flex items-center gap-2 h-9 px-4 rounded-md border border-input bg-background text-sm font-medium shadow-sm hover:bg-accent">
              <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <span>Search...</span>
              <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">⌘K</kbd>
            </button>
            <a href="https://github.com/hamzanachit/nmapjs" target="_blank" rel="noopener" class="inline-flex items-center gap-2 h-9 px-4 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
              <svg class="size-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>Star</span>
            </a>
            <button @click="state.toggleTheme()" class="inline-flex items-center justify-center size-9 rounded-md border border-input bg-background shadow-sm hover:bg-accent">
              <svg v-if="state.isDark.value" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              <svg v-else class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main><RouterView /></main>
      <footer class="border-t border-border">
        <div class="max-w-[1440px] mx-auto py-12 md:py-16 px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="col-span-2 md:col-span-1">
              <div class="mb-4 flex items-center gap-2 text-base font-bold">
                <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                NMapJS
              </div>
              <p class="mb-4 text-sm text-muted-foreground max-w-xs">
                Free & open-source, ready-to-use, customizable map components for Vue.js. Built on MapLibre GL.
              </p>
              <p class="text-sm text-muted-foreground">
                Built by <a href="https://x.com/HamzaNachite" target="_blank" rel="noopener" class="font-medium hover:underline">@HamzaNachite</a>
              </p>
            </div>
            <div>
              <h3 class="mb-3 text-sm font-medium text-foreground">Product</h3>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li><a href="/docs" class="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="/docs/basic-map" class="hover:text-foreground transition-colors">Components</a></li>
                <li><a href="/blocks" class="hover:text-foreground transition-colors">Blocks</a></li>
              </ul>
            </div>
            <div>
              <h3 class="mb-3 text-sm font-medium text-foreground">Community</h3>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://github.com/hamzanachit/nmapjs" target="_blank" rel="noopener" class="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="https://github.com/sponsors/hamzanachit" target="_blank" rel="noopener" class="hover:text-foreground transition-colors">Sponsor</a></li>
              </ul>
            </div>
            <div>
              <h3 class="mb-3 text-sm font-medium text-foreground">Resources</h3>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://maplibre.org/" target="_blank" rel="noopener" class="hover:text-foreground transition-colors">MapLibre GL</a></li>
                <li><a href="https://vuejs.org/" target="_blank" rel="noopener" class="hover:text-foreground transition-colors">Vue.js</a></li>
                <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="hover:text-foreground transition-colors">Tailwind CSS</a></li>
              </ul>
            </div>
          </div>
          <div class="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center text-sm text-muted-foreground sm:flex-row">
            <p>MIT License - Copyright (c) 2026 <a href="https://x.com/HamzaNachite" target="_blank" rel="noopener" class="hover:underline">@HamzaNachite</a></p>
            <div class="flex gap-4">
              <a href="https://github.com/hamzanachit" target="_blank" rel="noopener" class="hover:text-foreground transition-colors">GitHub</a>
              <a href="https://github.com/hamzanachit/nmapjs" target="_blank" rel="noopener" class="hover:text-foreground transition-colors">NMapJS Repo</a>
            </div>
          </div>
        </div>
      </footer>
      <SearchModal ref="searchModal" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import SearchModal from "./components/SearchModal.vue";
import { isDark, toggleTheme } from "./composables/useTheme";

const state = { isDark, toggleTheme };
const searchModal = ref(null);
</script>
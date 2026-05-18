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
        <RouterLink to="/docs/theme" class="block px-3 py-2 rounded-md text-sm bg-accent">Theme</RouterLink>
        <RouterLink to="/docs/examples" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Examples</RouterLink>
        <RouterLink to="/docs/geolocation" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Geolocation</RouterLink>
        <RouterLink to="/docs/heatmap" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Heatmap</RouterLink>
        <RouterLink to="/docs/directions" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Directions</RouterLink>
        <RouterLink to="/docs/advanced-usage" class="block px-3 py-2 rounded-md text-sm hover:bg-accent">Advanced</RouterLink>
      </nav>
    </aside>

    <div class="flex-1 container py-16 max-w-4xl">
      <h1 class="text-4xl font-bold mb-6">Theme System</h1>
      <p class="text-lg text-muted-foreground mb-8">
        NMapVueJS comes with a built-in theme system that supports light and dark modes with automatic detection and persistence.
      </p>

      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Quick Setup</h2>
          <p class="text-muted-foreground mb-4">
            Import the theme composable in your components to access theme state and toggle function:
          </p>
          <CodeBlock :code="codeSetup" lang="js" />
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Auto-Detection</h2>
          <p class="text-muted-foreground mb-4">
            On first load, the theme automatically detects your system preference:
          </p>
          <CodeBlock :code="codeDetect" lang="js" />
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Persistence</h2>
          <p class="text-muted-foreground mb-4">
            User preference is saved to localStorage and persists across sessions:
          </p>
          <CodeBlock :code="codePersist" lang="js" />
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Using in Templates</h2>
          <p class="text-muted-foreground mb-4">
            Apply the dark class to your app container:
          </p>
          <CodeBlock :code="codeTemplate" lang="vue" />
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Toggle Button</h2>
          <p class="text-muted-foreground mb-4">
            Add a theme toggle button to your header:
          </p>
          <CodeBlock :code="codeToggle" lang="vue" />
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Map Styles</h2>
          <p class="text-muted-foreground mb-4">
            Use the theme to switch between light and dark map basemaps:
          </p>
          <CodeBlock :code="codeMapStyle" lang="js" />
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Watching Changes</h2>
          <p class="text-muted-foreground mb-4">
            React to theme changes in your components:
          </p>
          <CodeBlock :code="codeWatch" lang="js" />
        </section>
      </div>

      <div class="mt-12 flex justify-between">
        <RouterLink to="/docs/controls" class="text-primary hover:underline">← Controls</RouterLink>
        <RouterLink to="/docs/examples" class="text-primary hover:underline">Examples →</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import CodeBlock from '../components/ui/CodeBlock.vue';

const codeSetup = [
  "import { isDark, toggleTheme } from '@/composables/useTheme'",
  '',
  '// Access current state',
  'console.log(isDark.value) // true or false',
  '',
  '// Toggle theme',
  'toggleTheme()',
].join('\n');

const codeDetect = [
  '// If no saved preference, checks:',
  '// window.matchMedia("(prefers-color-scheme: dark)").matches',
].join('\n');

const codePersist = [
  "// Saved as 'theme' key in localStorage",
  "// Values: 'dark' or 'light'",
].join('\n');

const codeTemplate = [
  '<template>',
  "  <div :class=\"{ 'dark': isDark.value }\">",
  '    <!-- Your app content -->',
  '  </div>',
  '</template>',
].join('\n');

const codeToggle = [
  '<button @click="toggleTheme">',
  '  <svg v-if="isDark.value" ...>Sun Icon</svg>',
  '  <svg v-else ...>Moon Icon</svg>',
  '</button>',
].join('\n');

const codeMapStyle = [
  'const getStyle = () => {',
  '  return isDark.value',
  '    ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"',
  '    : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"',
  '}',
].join('\n');

const codeWatch = [
  "import { watch } from 'vue'",
  "import { isDark } from '@/composables/useTheme'",
  '',
  'watch(isDark, (newVal) => {',
  '  // Reload map or update styles',
  '  if (map) {',
  '    map.setStyle(getStyle())',
  '  }',
  '})',
].join('\n');
</script>

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// Library-only build — entry is src/index.js, not the SPA
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "NMapVueJS",
      formats: ["es", "cjs"],
      fileName: (format) => format === "es" ? "nmapvuejs.es.js" : "nmapvuejs.cjs.js",
    },
    rollupOptions: {
      // maplibre-gl is bundled — CSS is inlined into output
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
          "maplibre-gl": "maplibregl",
        },
      },
    },
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false,    // single style.css output
    sourcemap: false,
  },
});

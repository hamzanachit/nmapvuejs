import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// Library-only build — entry is src/index.js, not the SPA
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "NMapJS",
      formats: ["es", "cjs"],
      fileName: (format) => format === "es" ? "nmapjs.es.js" : "nmapjs.cjs.js",
    },
    rollupOptions: {
      // Do not bundle vue or maplibre-gl — consumers provide these
      external: ["vue", "maplibre-gl"],
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

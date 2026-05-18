import { ref, provide, inject, watch, onMounted, onBeforeUnmount } from "vue";
import MapLibreGL from "maplibre-gl";

const MapSymbol = Symbol("map-libre-instance");

/**
 * @typedef {Object} MapContextValue
 * @property {import('maplibre-gl').default.Map | null} map
 * @property {import('vue').Ref<boolean>} isLoaded
 */

/**
 * @param {import('maplibre-gl').default.Map | null} map
 * @param {import('vue').Ref<boolean>} isLoaded
 * @returns {void}
 */
export function provideMap(map, isLoaded) {
  const context = {
    map,
    isLoaded,
  };
  provide(MapSymbol, context);
}

/**
 * @returns {MapContextValue}
 */
export function useMap() {
  const context = inject(MapSymbol);
  if (!context) {
    throw new Error("useMap must be used within a Map component");
  }
  return context;
}

/**
 * @param {import('vue').Ref<string>|string} themeProp
 * @returns {import('vue').Ref<string>}
 */
export function useResolvedTheme(themeProp) {
  if (themeProp) {
    // Assuming themeProp is a ref
    return themeProp;
  }

  const detectedTheme = ref("light");

  if (typeof document !== "undefined") {
    if (document.documentElement.classList.contains("dark")) {
      detectedTheme.value = "dark";
    } else if (document.documentElement.classList.contains("light")) {
      detectedTheme.value = "light";
    }
  }

  if (typeof window !== "undefined") {
    detectedTheme.value = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  watch(
    () => document.documentElement.classList,
    () => {
      if (document.documentElement.classList.contains("dark")) {
        detectedTheme.value = "dark";
      } else if (document.documentElement.classList.contains("light")) {
        detectedTheme.value = "light";
      }
    }
  );

  return detectedTheme;
}
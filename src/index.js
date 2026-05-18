// NMapVueJS - Beautiful map components for Vue.js
// Export all components for npm package

export { default as NMap } from "./components/Map.vue";
export { default as NMarker } from "./components/MapMarker.vue";
export { default as NMarkerContent } from "./components/MarkerContent.vue";
export { default as NMarkerPopup } from "./components/MarkerPopup.vue";
export { default as NMarkerTooltip } from "./components/MarkerTooltip.vue";
export { default as NMarkerLabel } from "./components/MarkerLabel.vue";
export { default as NPopup } from "./components/MapPopup.vue";
export { default as NControls } from "./components/MapControls.vue";
export { default as NRoute } from "./components/MapRoute.vue";
export { default as NArc } from "./components/MapArc.vue";
export { default as NCluster } from "./components/MapCluster.vue";

export { useMap } from "./composables/useMap";
export { isDark, toggleTheme } from "./composables/useTheme";

// Ready-made example maps — drop in and done
export { default as MapAnalytics } from "./views/examples/MapExampleAnalytics.vue";
export { default as MapTrail } from "./views/examples/MapExampleTrail.vue";
export { default as MapFlyTo } from "./views/examples/MapExampleFlyTo.vue";
export { default as MapEV } from "./views/examples/MapExampleEV.vue";
export { default as MapTrending } from "./views/examples/MapExampleTrending.vue";
export { default as MapDelivery } from "./views/examples/MapExampleDelivery.vue";
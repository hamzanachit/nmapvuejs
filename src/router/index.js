import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/HomeView.vue") },
  { path: "/docs", component: () => import("../views/DocsView.vue") },
  { path: "/docs/basic-map", component: () => import("../views/BasicMapView.vue") },
  { path: "/docs/installation", component: () => import("../views/InstallationView.vue") },
  { path: "/docs/markers", component: () => import("../views/MarkersView.vue") },
  { path: "/docs/popups", component: () => import("../views/PopupsView.vue") },
  { path: "/docs/routes", component: () => import("../views/RoutesView.vue") },
  { path: "/docs/arcs", component: () => import("../views/ArcsView.vue") },
  { path: "/docs/clusters", component: () => import("../views/ClustersView.vue") },
  { path: "/docs/controls", component: () => import("../views/ControlsView.vue") },
  { path: "/docs/theme", component: () => import("../views/ThemeView.vue") },
  { path: "/docs/examples", component: () => import("../views/ExamplesView.vue") },
  { path: "/docs/geolocation", component: () => import("../views/GeolocationView.vue") },
  { path: "/docs/heatmap", component: () => import("../views/HeatmapView.vue") },
  { path: "/docs/directions", component: () => import("../views/DirectionsView.vue") },
  { path: "/docs/advanced-usage", component: () => import("../views/AdvancedView.vue") },
  { path: "/blocks", component: () => import("../views/BlocksView.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
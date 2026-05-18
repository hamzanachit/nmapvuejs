import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { isDark } from "./composables/useTheme";

const app = createApp(App);
app.use(router);
app.mount("#app");

export { isDark };
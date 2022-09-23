import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
// router
import router from "./router";
import "./assets/styles/index.css";

createApp(App).use(router).use(ElementPlus).mount("#app");

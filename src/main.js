import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
// router
import router from "./router";
import "./assets/styles/index.css";
import "./assets/css/intlTelInput.css";
import "intl-tel-input/build/css/intlTelInput.css";
import VueTinder from "vue-tinder";

createApp(App).use(router).use(ElementPlus).use(VueTinder).mount("#app");

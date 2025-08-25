import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(router).use(PrimeVue).mount("#app").app.use(pinia);

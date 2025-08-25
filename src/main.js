import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(PrimeVue);
app.mount("#app");
app.use(pinia);

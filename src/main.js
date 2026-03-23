import "./assets/main.scss";

import { createApp } from "vue";
import { createManager } from "@vue-youtube/core";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(createManager());
app.use(pinia);
app.mount("#app");

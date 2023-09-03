import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Components from "@/template/components";

const app = createApp(App);
app.use(router);
app.use(Components);
app.mount("#app");

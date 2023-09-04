import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Store from "./store";
import Components from "@/template/components";

const app = createApp(App);
app.use(router);
app.use(Store);
app.use(Components);
app.mount("#app");

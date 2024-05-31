require("./bootstrap");

import { createApp } from "vue";
import Home from "./components/Home.vue";
import routes from "./routes.js";

const app = createApp({});

app.component("home", Home);

app.use(routes);
app.mount("#app");
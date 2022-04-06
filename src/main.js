import { createApp } from 'vue'
import App from './App.vue'
import Vconsole from "vconsole";
import router from "./router.js";

if (process.env.NODE_ENV == 'development') {
  new Vconsole()
}

createApp(App).use(router).mount('#app')

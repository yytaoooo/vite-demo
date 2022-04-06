import { createRouter, createWebHashHistory } from "vue-router";
import Index from "./pages/index.vue";
import My from "./pages/my.vue";

const routes = [
  { path: '/', component: Index },
  { path: '/my', component: My }
]
var router

export default router = createRouter({
  history: createWebHashHistory(),
  routes
})


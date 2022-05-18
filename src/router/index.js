import { createWebHistory, createRouter } from "vue-router";
import Menu from "@/views/MenuView.vue";
import LoreView from "@/views/LoreView.vue";
import SegredosView from "@/views/SegredosView.vue";
import PersonagensView from "@/views/PersonagensView.vue";
import EpisodiosView from "@/views/EpisodiosView.vue";

const routes = [
  { path: "/", name: "Menu", component: Menu },
  { path: "/Lore", name: "LoreView", component: LoreView },
  { path: "/Segredos", name: "SegredosView", component: SegredosView },
  { path: "/Personagens", name: "PersonagensView", component: PersonagensView },
  { path: "/Episodios", name: "EpisodiosView", component: EpisodiosView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

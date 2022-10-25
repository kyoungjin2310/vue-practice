import VueRouter from "vue-router";
import Vue from "vue";
import AskView from "../view/AskView.vue";
import NewsView from "../view/NewsView.vue";
import JobsView from "../view/JobsView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
  ],
});

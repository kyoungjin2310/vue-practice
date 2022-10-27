import VueRouter from "vue-router";
import Vue from "vue";
import AskView from "../view/AskView.vue";
import NewsView from "../view/NewsView.vue";
import JobsView from "../view/JobsView.vue";
import UserView from "../view/UserView.vue";
import ItemView from "../view/ItemView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
    {
      path: "/ask",
      name: "news",
      component: AskView,
    },
    {
      path: "/jobs",
      name: "news",
      component: JobsView,
    },
    {
      //:id - params에 id값으로 설정
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});

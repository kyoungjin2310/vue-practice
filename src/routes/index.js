import VueRouter from "vue-router";
import Vue from "vue";
// import AskView from "../view/AskView.vue";
// import NewsView from "../view/NewsView.vue";
// import JobsView from "../view/JobsView.vue";
import UserView from "../view/UserView.vue";
import ItemView from "../view/ItemView.vue";
import CreateListView from "../view/CreateListView";

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
      component: CreateListView("NewsView"),
    },
    {
      path: "/ask",
      name: "ask",
      component: CreateListView("AskView"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: CreateListView("JobsView"),
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

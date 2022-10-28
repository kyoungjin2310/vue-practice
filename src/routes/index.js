import VueRouter from "vue-router";
import Vue from "vue";
import AskView from "../view/AskView.vue";
import NewsView from "../view/NewsView.vue";
import JobsView from "../view/JobsView.vue";
import UserView from "../view/UserView.vue";
import ItemView from "../view/ItemView.vue";
// import CreateListView from "../view/CreateListView";

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
      beforeEnter: (to, from, next) => {
        //to - 이동할 url
        console.log("to", to);
        //from - 현재 url
        console.log("from", from);
        console.log(next);
        //router 쿼리 쓸경우
        if (to.matched === "") {
          next();
        }
        //인증
        if (to.auth) {
          next();
        } else {
          router.replace("/login");
        }
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
    },
    {
      path: "/jobs",
      name: "jobs",
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

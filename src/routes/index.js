import VueRouter from "vue-router";
import Vue from "vue";
import AskView from "../view/AskView.vue";
import NewsView from "../view/NewsView.vue";
import JobsView from "../view/JobsView.vue";
import UserView from "../view/UserView.vue";
import ItemView from "../view/ItemView.vue";
// import CreateListView from "../view/CreateListView";
import bus from "../utils/bus";
import { store } from "../store/index";
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
        bus.$emit("start:spinner");

        //router에서 store은 this 사용 못함, 직접 불러와야함
        //router의 name을 알려면 현재 to를 사용해야함
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            bus.$emit("end:spinner");
            //next 안하면 data가 안들어옴
            next();
          })
          .catch((e) => console.log(e));
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

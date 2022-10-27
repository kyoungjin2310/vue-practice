<template>
  <div id="app">
    <header-menu></header-menu>
    <!-- vue router transition 공식문서 - https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition
     --><transition name="page">
      <router-view />
    </transition>
    <spinner-loading :loading="loadingStatus" />
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
import SpinnerLoading from "./components/SpinnerLoading.vue";
import bus from "./utils/bus";
export default {
  components: {
    HeaderMenu,
    SpinnerLoading,
  },
  data() {
    //변수
    return {
      loadingStatus: false,
    };
  },
  methods: {
    //함수 만듦
    startSpiner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    //event
    bus.$on("start:spinner", this.startSpiner);
    bus.$on("end:spinner", this.endSpinner);
  },
  //이벤트 버스는 특정 컴포넌트에서 중첩되어 리스너가 달릴 수 가 있으니 off로 해제 (App에서 event 할 경우)
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpiner);
    bus.$off("end:spinner", this.endSpinner);
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
a {
  color: #34495e;

  text-decoration: none;
  &.router-link-exact-acitve {
    text-decoration: underline;
  }
  &:hover {
    color: #42b883;
  }
}
</style>

<template>
  <div id="app">
    <header-menu></header-menu>
    <!-- vue router transition 공식문서 - https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition
     --><transition name="page">
      <router-view />
    </transition>
    <spinner-loading :loading="true" />
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
import SpinnerLoading from "./components/SpinnerLoading.vue";

export default {
  components: {
    HeaderMenu,
    SpinnerLoading,
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

<template>
  <div id="app">
    <header-menu></header-menu>
    <!-- vue router transition 공식문서 - https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition
     --><transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
export default {
  components: {
    HeaderMenu,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div id="app">
    <header-menu></header-menu>
    <router-view />
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
</style>

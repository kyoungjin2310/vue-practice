<template>
  <div class="header">
    <menu-item v-for="item in menu" :key="item" :menu="item" />
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";
export default {
  components: { MenuItem },
  data() {
    return {
      menu: ["news", "ask", "jobs", "input"],
    };
  },
};
</script>

<!-- scoped 해당 컴포넌트에만 적용 -->
<style lang="scss" scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;

  //vue 자체적으로 활성화 되었을때 class name
  .router-link-exact-active {
    color: #35495e;
  }
  a {
    color: white;
  }
}
</style>

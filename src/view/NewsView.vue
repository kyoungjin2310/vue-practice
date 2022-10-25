<template>
  <div>
    <div v-for="item in this.$store.state.news" v-bind:key="item.title">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    //dispatch
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>

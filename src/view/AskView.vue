<template>
  <div>
    <div v-for="item in ask" v-bind:key="item">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api";
export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => (this.ask = response.data))
      .catch((error) => console.log(console.log(error)));
  },
};
</script>

<style></style>

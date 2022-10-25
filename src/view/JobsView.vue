<template>
  <div>
    <div v-for="item in jobs" v-bind:key="item.title">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api";
export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobsList()
      .then((response) => (this.jobs = response.data))
      .catch((error) => console.log(console.log(error)));
  },
};
</script>

<style></style>

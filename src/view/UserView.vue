<template>
  <div>user</div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    const userName = this.$route.params.id;
    axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
  },
};
</script>

<style></style>

<template>
  <div>
    <p v-for="item in fetchAsk" v-bind:key="item.title">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }}, {{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  //this. 타고타고 많아져서 mapGetters 씀
  //mapGetters key: getters에서 선언한 것
  computed: {
    ...mapGetters(["fetchAsk"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>

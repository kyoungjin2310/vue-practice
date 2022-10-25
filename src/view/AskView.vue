<template>
  <div>
    <div v-for="item in ask" v-bind:key="item.title">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  //this. 타고타고 많아져서 mapState를 씀
  computed: {
    ...mapState({
      ask: (state) => state.ask,
    }),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>

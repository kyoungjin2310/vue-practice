<template>
  <div>
    <p>{{ this.$store.state.user.karma }}</p>
  </div>
</template>

<script>
export default {
  created() {
    const userName = this.$route.params.id;
    //.dispatch("type", 인자) - 인자가 하나만 넘어가서 여러 값을 넘길 때에는 객체로 넘기기
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>

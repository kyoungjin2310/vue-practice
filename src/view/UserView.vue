<template>
  <div>
    <p>name: {{ userInfo.name }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    //.dispatch("type", 인자) - 인자가 하나만 넘어가서 여러 값을 넘길 때에는 객체로 넘기기
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>

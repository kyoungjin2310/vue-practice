<template>
  <div>
    <user-profile :info="userInfo">
      <template v-slot:username>{{ userInfo.id }}</template>
      <template v-slot:time>{{ userInfo.created }}</template>
      <template v-slot:karma>{{ userInfo.karma }}</template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  components: {
    UserProfile,
  },
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

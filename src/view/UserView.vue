<template>
  <div>
    <user-profile :info="userInfo">
      <template v-slot:username>{{ userInfo.id }}</template>
      <template v-slot:time>{{ `Joined ${userInfo.created}` }}</template>
      <template v-slot:karma>, {{ userInfo.karma }}</template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import bus from "../utils/bus";
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
    bus.$emit("start:spinner");

    const userName = this.$route.params.id;
    //.dispatch("type", 인자) - 인자가 하나만 넘어가서 여러 값을 넘길 때에는 객체로 넘기기
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_USER", userName)
        .then(() => {
          bus.$emit("end:spinner");
        })
        .catch((e) => console.log(e));
    }, 3000);
  },
};
</script>

<style></style>

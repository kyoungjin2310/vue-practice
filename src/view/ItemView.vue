<template>
  <div>
    <!-- 질문 상세 정보 -->
    <section>
      <user-profile :info="fetchItem">
        <!-- template tag - txt만 나타남 <></>랑 같음 -->
        <template v-slot:username>
          <router-link :to="`/user/${fetchItem.user}`">
            {{ fetchItem.user }}
          </router-link>
        </template>
        <template v-slot:time> {{ `Posted ${fetchItem.time_ago}` }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <!-- v-html data에 html로 받는경우  -->
      <div v-html="fetchItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(["fetchItem"]),
  },
};
</script>

<style></style>

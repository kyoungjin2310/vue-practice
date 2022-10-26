<template>
  <div>
    <!-- 질문 상세 정보 -->
    <section>
      <div>
        <div>User</div>
        <div>
          <!-- router 앞에 item을 없애고 싶으면 /을 붙임 -->
          <router-link :to="`/user/${fetchItem.user}`">{{
            fetchItem.user
          }}</router-link>
          <div>{{ fetchItem.time_ago }}</div>
        </div>
      </div>
      <h2>{{ fetchItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
    </section>
    <div>{{ fetchItem.content }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchItem"]),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style></style>

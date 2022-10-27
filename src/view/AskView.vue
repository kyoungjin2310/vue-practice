<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchAsk" v-bind:key="item.title" class="post">
        <!-- 포인트 영역 -->
        <div class="points">{{ item.points }}</div>
        <div>
          <p class="news-title">
            <router-link v-bind:to="`item/${item.id}`">{{
              item.title
            }}</router-link>
          </p>
          <small class="link-text"
            >{{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{
              item.user
            }}</router-link></small
          >
        </div>
      </li>
    </ul>
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
};
</script>

<style></style>

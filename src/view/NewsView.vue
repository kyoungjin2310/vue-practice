<template>
  <div>
    <list-item />
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus";

export default {
  components: {
    ListItem,
  },
  created() {
    //이벤트 실행
    bus.$emit("start:spinner");

    //data를 불러오고 나서 spnnier가 사라져야 되어서, Promise 객체 반환
    //Promise 객체를 반환하기 때문에 then, catch 사용
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_NEWS")
        .then(() => {
          bus.$emit("end:spinner");
        })
        .catch((e) => console.log(e));
    }, 3000);
  },
};
</script>

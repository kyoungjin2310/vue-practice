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
    bus.$emit("end:spinner");
  },
};
</script>

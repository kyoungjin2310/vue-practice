import bus from "../utils/bus";

export default {
  //mixin : 공통 로직 쓸때 사용
  created() {
    bus.$emit("start:spinner");

    this.$store
      .dispatch("FETCH_LIST", this.$route.name)
      .then(() => {
        bus.$emit("end:spinner");
      })
      .catch((e) => console.log(e));
  },
};

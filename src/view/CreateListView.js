import ListView from "./ListView";
import bus from "../utils/bus";
export default function createListView(name) {
  //재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
  return {
    //name: 바꾸어도 됨, 컴포넌트 이름
    //name - 컴포넌트 이름 >  ListView > listitem 순서
    name: name,
    created() {
      bus.$emit("start:spinner");

      this.$store
        .dispatch("FETCH_LIST", this.$route.name)
        .then(() => {
          bus.$emit("end:spinner");
        })
        .catch((e) => console.log(e));
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}

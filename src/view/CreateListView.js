// import ListView from "./ListView";
// import bus from "../utils/bus";
// export default function createListView(name) {
//   //   하이오드 컴포넌트 단점
//   // * 쓰기 까다로음
//   // - 자식 컴포넌트 타고타고 들어갈 경우
//   // - api 주소가 까다롭거나 바뀔경우
//   // - json data 구조가 다를 경우

//   //재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
//   return {
//     //name: 바꾸어도 됨, 컴포넌트 이름
//     //name - 컴포넌트 이름 >  ListView > listitem 순서
//     name: name,
//     created() {
//       bus.$emit("start:spinner");

//       this.$store
//         .dispatch("FETCH_LIST", this.$route.name)
//         .then(() => {
//           bus.$emit("end:spinner");
//         })
//         .catch((e) => console.log(e));
//     },
//     render(createElement) {
//       return createElement(ListView);
//     },
//   };
// }

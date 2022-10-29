<template>
  <div>
    <!-- <check-box
      v-for="item in list"
      :key="item"
      :checked="checked"
      :name="item"
      v-on:input="checkedBox"
    /> -->
    <!-- v-on:input="checkedBox" - v-on:하위 컴포넌트에서 발생한 이벤트 이름="상위 컴포넌트의 메서드 이름"-->
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <div slot-scope="{ response, loading }">
        <div v-if="!loading"></div>
        {{ response }}
        <div v-if="loading">Loading</div>
      </div>
    </fetch-data>
  </div>
</template>

<script>
// import CheckBox from "../components/CheckBox.vue";
import FetchData from "../components/FetchData.vue";
export default {
  components: { FetchData },
  // data() {
  //   return {
  //     list: ["w1"],
  //     checked: false,
  //   };
  // },
  // methods: {
  //   checkedBox() {
  //     this.checked = !this.checked;
  //   },
  // },
};
</script>

<style></style>

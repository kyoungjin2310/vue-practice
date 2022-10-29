<template>
  <div>
    <check-box
      v-for="item in list"
      :key="item"
      :checked="checked"
      :name="item"
      v-on:input="checkedBox"
    />
  </div>
</template>

<script>
import CheckBox from "../components/CheckBox.vue";
export default {
  components: { CheckBox },
  data() {
    return {
      list: ["w1"],
      checked: false,
    };
  },
  methods: {
    checkedBox() {
      this.checked = !this.checked;
    },
  },
};
</script>

<style></style>

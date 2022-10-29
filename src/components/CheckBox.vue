<template>
  <div>
    <input
      type="checkbox"
      v-model="inputChecked"
      :name="`${name}`"
      :id="`${name}`"
      :checked="checked"
      @click="toggleCheckBox"
    />
    <label :for="`${name}`">{{ name }}</label>
  </div>
</template>

<script>
export default {
  props: ["checked", "name"],
  data() {
    return {
      inputChecked: this.checked,
    };
  },
  methods: {
    toggleCheckBox() {
      this.$emit("input", !this.checked);
    },
  },
};
</script>

<style></style>

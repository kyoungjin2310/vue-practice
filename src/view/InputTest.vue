<template>
  <div>
    <p><input type="text" v-model="username" placeholder="id" /></p>
    <p>
      <input
        type="password"
        v-model="password"
        name=""
        id=""
        placeholder="pw"
      />
    </p>
    <p>{{ getDate(date) }}</p>
    <p>{{ helloToMixin }}</p>
  </div>
</template>

<script>
import { dateFormat } from '@/mixins/dateFormat';
export default {
  data() {
    return {
      date: new Date(),
      username: '',
      password: '',
    };
  },
  computed: {
    helloToMixin() {
      return this.mixinData;
    },
  },
  mixins: [dateFormat],
};
</script>

<style></style>

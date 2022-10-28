<template>
  <div>
    <router-link :to="`/${menu}`">{{ menu }}</router-link>
  </div>
</template>

<script>
export default {
  props: ["menu"],
};
</script>

<style></style>

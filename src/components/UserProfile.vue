<template>
  <div class="user-container">
    <div><i class="fas fa-user"></i></div>
    <div class="user-description">
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
      <div class="time">
        <div class="time">
          <slot name="time"> <!-- 상위 컴포넌트에서 정의할 영역 --> </slot>
        </div>
      </div>
      <!-- slot쓸때, data없으면 안생기고, data가 있으면 생김 -->
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // data가 Object 형태
    info: Object,
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>

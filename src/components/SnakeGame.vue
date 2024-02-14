<template>
  <div>
    <div
      v-for="(segment, index) in segments"
      :key="index"
      class="snake-segment"></div>
  </div>
</template>

<script>
export default {
  props: {
    segments: Array,
  },
};
</script>

<style scoped>
.snake-segment {
  width: 10px;
  height: 10px;
  background-color: green;
}
</style>

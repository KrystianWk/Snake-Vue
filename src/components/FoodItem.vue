<template>
  <div
    class="food"
    :style="{
      top: position.y * 10 + 'px',
      left: position.x * 10 + 'px',
    }"></div>
</template>

<script>
export default {
  props: {
    position: Object,
  },
};
</script>

<style scoped>
.food {
  width: 10px;
  height: 10px;
  background-color: red;
  position: absolute;
}
</style>

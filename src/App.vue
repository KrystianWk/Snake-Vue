<template>
  <div id="app">
    <Board />
  </div>
</template>

<script>
import Board from './components/GameBoard.vue';

export default {
  components: {
    Board,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>

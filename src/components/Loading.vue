<template>
  <div class="loading">
    <div class="loading_text">Loading...</div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 100;
  &_text {
    color: #fff;
    padding: 50px;
  }
}
</style>

<template>
  <div class="modal">
    <div class="modal-mask"></div>
    <div class="modal-content">

      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  @include flexCenter();
}
.modal-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.8);
}
.modal-content {
  color: #000;
  width: 400px;
  min-height: 250px;
  background-color: #fff;
  z-index: 6;
  position: relative;
}
</style>

<template>
  <Modal>
    <div class="success">
      <h1>預約成功</h1>
      <h2>\</h2>
    </div>
    <div class="goBackBox">
      <button class="goBack" @click="$router.push({ name: 'Home' })">回首頁</button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'ModalSuccess',
  components: {
    Modal
  }
}
</script>

<style lang="scss">
.success {
  padding: 40px;
  text-align: left;
  margin-bottom: 20px;
  h1 {
    font-size: 24px;
    color: #000000;
    letter-spacing: 2.51px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 16px;
  }
}
.goBackBox {
  text-align: right;
  margin-right: 40px;
  .goBack {
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 1.46px;
    text-align: right;
    background: #575757;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
}
</style>

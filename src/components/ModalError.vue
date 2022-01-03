<template>
  <Modal>
    <div class="error">
      <h1>預約失敗</h1>
      <h2>\</h2>
      <h3>預約時間已被人預訂</h3>
    </div>
    <div class="goBackBox">
      <button class="goBack" @click="handleModal(null)">返回</button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
import { mapActions } from 'vuex'

export default {
  name: 'ModalError',
  components: {
    Modal
  },
  methods: {
    ...mapActions('modal', ['handleModal'])
  }
}
</script>

<style lang="scss" scope>
.error {
  padding: 40px;
  text-align: left;
  margin-bottom: 20px;
  h1 {
    font-weight: bold;
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

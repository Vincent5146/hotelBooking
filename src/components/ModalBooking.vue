<template>
  <Modal>
    <div class="booking">
      <h1>預約時段</h1>
      <p>\</p>
      <div>
        <h2>姓名</h2><input type="text" v-model="data.name">
      </div>
      <div>
        <h2>電話</h2><input type="text" v-model="data.tel">
      </div>
      <div>
        <h2>預約起迄</h2><input type="date" v-model="data.date[0]">~<input type="date" v-model="data.date[1]">
      </div>
      <div class="bookingdate">
        <p>平日時段<br><br>假日時段</p>
        <p>1夜<br><br>1夜</p>
      </div>
      <h3><span>=</span>NT.2850</h3>
      <div class="btn">
        <button class="delete" @click="handleModal(null)">取消</button>
        <button class="confirm" @click="bookings(data)">確定預約</button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
import { mapActions } from 'vuex'
import { bookingRoom } from '../api/index'

export default {
  name: 'ModalBooking',
  components: {
    Modal
  },
  data () {
    return {
      data: {
        name: '',
        tel: '',
        date: [
          0,
          1
        ]
      }
    }
  },
  methods: {
    bookings (data) {
      const id = this.$route.params.room_id
      bookingRoom(id, data).then((response) => {
        if (response.data.success) {
          this.$store.dispatch('modal/handleModal', 'ModalSuccess')
          console.log(response.data)
        } else {
          this.$store.dispatch('modal/handleModal', 'ModalError')
        }
      })
    },
    ...mapActions('modal', ['handleModal'])
  }
}
</script>

<style lang="scss" scope>
  .booking {
    padding: 40px;
    text-align: left;
    h1 {
      font-size: 24px;
      color: #000000;
      letter-spacing: 2.51px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 20px;
    }
    div {
      display: flex;
      align-content: center;
      justify-content: space-between;
      margin-bottom: 10px;
      h2 {
        font-weight: bold;
        font-size: 14px;
        color: #000000;
        letter-spacing: 1.46px;
        text-align: left;
      }
      input {
        border-radius: 5px;
      }
    }
    span {
      margin-right: 30px;
    }
    h3 {
      font-size: 26px;
      color: #FF5C5C;
      letter-spacing: 2.72px;
      text-align: right;
      margin: 10px 0 30px;
    }
    .bookingdate {
      width: 100%;
      background-color: #EDEDED;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
      p {
        margin: 0;
        font-size: 12px;
        color: #6D7278;
        letter-spacing: 1.25px;
      }
    }
    .btn {
      .delete {
        background: #D8D8D8;
        border: none;
        font-size: 14px;
        color: #6D7278;
        letter-spacing: 1.46px;
        padding: 10px 25px;
        cursor: pointer;
      }
      .confirm {
        background: #484848;
        border: none;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 1.46px;
        padding: 10px 25px;
        cursor: pointer;
      }
    }
  }
</style>

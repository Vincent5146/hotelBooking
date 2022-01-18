<template>
  <Modal>
    <div class="booking">
      <h1>預約時段</h1>
      <p>\</p>
      <div class="cutomerInfo">
        <h2>姓名</h2><input type="text" v-model="data.name">
      </div>
      <div class="cutomerInfo">
        <h2>電話</h2><input type="text" v-model="data.tel">
      </div>
      <div class="cutomerInfo">
        <h2>預約起訖</h2>
        <v-date-picker
          v-model="range"
          mode="date"
          is-range
          :disabled-dates="bookingConfigs.disabledDates"
          @click="counting()"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <input :value="inputValue.start" v-on="inputEvents.start" />
            <input :value="inputValue.end" v-on="inputEvents.end" />
          </template>
        </v-date-picker>
      </div>
      <div class="bookingRange">
        <p>平日時段<br><br>假日時段</p>
        <p>{{ this.normalDate.length }}夜<br><br>{{ this.holidayDate.length }}夜</p>
      </div>
      <h3><span class="price">=</span>NT. {{ totalPrice }}</h3>
      <div class="btn">
        <button class="delete" @click="handleModal(null)">取消</button>
        <button class="confirm" @click="bookings(data)">確定預約</button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
import { mapActions, mapState } from 'vuex'
import { bookingRoom } from '../api/index'
import dayjs from 'dayjs'

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
        date: []
      },
      range: {
        start: new Date(),
        end: new Date()
      },
      totalDate: [],
      normalDate: [],
      holidayDate: [],
      totalPrice: 0
    }
  },
  computed: {
    ...mapState('modal', ['bookingConfigs'])
  },
  methods: {
    counting () {
      const { start, end } = this.range
      if (start !== end) {
        for (let i = 0; i <= dayjs(end).diff(start, 'day'); i++) {
          this.totalDate.push(dayjs(start).add(i, 'day').format('YYYY/MM/DD'))
        }
      } else if (start === end) {
        this.totalDate.push(dayjs(start).format('YYYY/MM/DD'))
      }
      this.totalDate = this.totalDate.map(function (item) {
        item = new Date(item).getDay()
        return item
      })
      this.totalDate.splice(0, 1)
      this.normalDate = this.totalDate.filter(item => {
        return item < 6 && item > 0
      })
      this.holidayDate = this.totalDate.filter(item => {
        return !(item < 6 && item > 0)
      })
      this.totalPrice = (this.bookingConfigs.priceInfo.normal * this.normalDate.length) + (this.bookingConfigs.priceInfo.holiday * this.holidayDate.length)
      this.totalDate = []
    },
    bookings (data) {
      const id = this.$route.params.room_id
      const { start, end } = this.range
      if (start !== end) {
        for (let i = 0; i <= dayjs(end).diff(start, 'day'); i++) {
          this.data.date.push(dayjs(start).add(i, 'day').format('YYYY-MM-DD'))
        }
      } else if (start === end) {
        this.data.date.push(dayjs(start).format('YYYY-MM-DD'))
      }
      bookingRoom(id, data).then((response) => {
        if (response.data.success) {
          this.$store.dispatch('modal/handleModal', 'ModalSuccess')
        } else {
          this.$store.dispatch('modal/handleModal', 'ModalError')
        }
      })
      this.totalDate = []
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
    .cutomerInfo {
      display: flex;
      align-content: center;
      justify-content: space-between;
      margin-bottom: 10px;
      h2 {
        width: 150px;
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
    .price {
      margin-right: 30px;
    }
    h3 {
      font-size: 26px;
      color: #FF5C5C;
      letter-spacing: 2.72px;
      text-align: right;
      margin: 10px 0 30px;
    }
    .bookingRange {
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
      display: flex;
      justify-content: space-between;
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

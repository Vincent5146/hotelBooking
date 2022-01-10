<template>
  <Modal>
    <div class="booking">
      <h1>預約時段</h1>
      <v-date-picker
        v-model="range"
        mode="date"
        is-range
        :disabled-dates="bookingConfigs.disabledDates"
      >
        <template v-slot="{ inputValue, inputEvents }">
          <input :value="inputValue.start" v-on="inputEvents.start" />
          <input :value="inputValue.end" v-on="inputEvents.end" />
        </template>
      </v-date-picker>
      <p>\</p>

      {{ bookingConfigs.priceInfo }}

      <div class="bookingdate">
        <p>平日時段<br /><br />假日時段</p>
        <p>1夜<br /><br />1夜</p>
      </div>
      <h3><span>=</span>NT.2850</h3>
      <div class="btn">
        <button class="delete" @click="handleModal(null)">取消</button>
        <button class="confirm" @click="bookings(data)">確定預約</button>
      </div>
      {{ price }}
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
        date: [0, 1]
      },
      range: {
        start: new Date(),
        end: new Date()
      }
    }
  },
  computed: {
    ...mapState('modal', ['bookingConfigs']),
    price () {
      // TODO 計算價錢
      const { start, end } = this.range
      console.log(dayjs(end).diff(start, 'day'), 'diff')
      return `${new Date(start).getDay()} - ${new Date(end).getDay()}`
    }
  },
  methods: {
    ...mapActions('modal', ['handleModal']),
    bookings (data) {
      const id = this.$route.params.room_id
      bookingRoom(id, data).then((response) => {
        // ? 建議統一 vuex 用法，不要一些用 $store.dispatch，一些用 mapActions，整個專案統一
        if (response.data.success) {
          this.$store.dispatch('modal/handleModal', 'ModalSuccess')
        } else {
          this.$store.dispatch('modal/handleModal', 'ModalError')
        }
      })
    }
  }
}
</script>

<style lang="scss" scope></style>

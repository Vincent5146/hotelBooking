<template>
  <div class="container" v-for="item in room" :key="item.id">
    <div class="pictures">
      <vue-easy-lightbox
        scrollDisabled
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="item.imageUrl"
        :index="index"
        @hide="handleLightBox"
      ></vue-easy-lightbox>
      <div class="logo" @click="$router.push({ name: 'Home' })"></div>
      <div
        class="pic1"
        :style="{ backgroundImage: `url(${item.imageUrl[2]})` }"
        @click="showMultiple"
      ></div>
      <div>
        <div
          class="pic2"
          :style="{ backgroundImage: `url(${item.imageUrl[1]})` }"
          @click="showMultiple"
        ></div>
        <div
          class="pic3"
          :style="{ backgroundImage: `url(${item.imageUrl[0]})` }"
          @click="showMultiple"
        ></div>
      </div>
    </div>
    <div class="information">
      <div class="room">
        <div>
          <h1>{{ item.name }}</h1>
          <h3>
            房客人數限制： {{ item.descriptionShort.GuestMin }}~{{
              item.descriptionShort.GuestMax
            }}
            人
          </h3>
          <h3>床型：{{ item.descriptionShort.Bed[0] }}</h3>
          <h3>衛浴數量： {{ item.descriptionShort["Private-Bath"] }} 間</h3>
          <h3>房間大小： {{ item.descriptionShort.Footage }} 平方公尺</h3>
          <p>{{ item.description }}</p>
          <p>\</p>
          <div class="timeBox">
            <div class="time">
              <h2>Check In</h2>
              <h4>
                {{ item.checkInAndOut.checkInEarly }} -
                {{ item.checkInAndOut.checkInLate }}
              </h4>
            </div>
            <div class="time">
              <h2>Check Out</h2>
              <h4>{{ item.checkInAndOut.checkOut }}</h4>
            </div>
          </div>
        </div>
        <div class="icons">
          <IconImage
            v-for="(icon, index) in icons"
            class="fonts"
            :key="index"
            :iconType="icon.type"
            :isActive="icon.isActive"
            :label="icon.label"
          />
        </div>
      </div>
      <div class="date">
        <div class="prices">
          <h2>NT.{{ item.normalDayPrice }}</h2>
          <h3>平日(一~四)</h3>
          <h4>NT.{{ item.holidayPrice }}</h4>
          <h3>假日(五~日)</h3>
        </div>
        <div class="calender">
          <v-date-picker
            :modelValue="Date.now()"
            :disabled-dates="disabledDates"
          />
        </div>
        <button @click="openBookingModal">預約時段</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getInformation } from '../api/index'
import IconImage, { ICON_TYPE } from '@/components/IconImage.vue'

const icons = [
  { label: 'Wi-Fi', type: ICON_TYPE.WIFI, isActive: false },
  { label: '電話', type: ICON_TYPE.TEL, isActive: false },
  { label: '漂亮的視野', type: ICON_TYPE.VIEW, isActive: false },
  { label: '早餐', type: ICON_TYPE.BREAKFAST, isActive: false },
  { label: '空調', type: ICON_TYPE.AIR_CONDITIONER, isActive: false },
  { label: '禁止吸菸', type: ICON_TYPE.SMOKE_FREE, isActive: false },
  { label: 'Mini', type: ICON_TYPE.BAR, isActive: false },
  { label: '冰箱', type: ICON_TYPE.BREAKFAST, isActive: false },
  { label: '適合兒童', type: ICON_TYPE.CHILD_FRIENDLY, isActive: false },
  { label: 'Room', type: ICON_TYPE.ROOM_SERVICE, isActive: false },
  { label: '沙發', type: ICON_TYPE.WIFI, isActive: false },
  { label: '寵物攜帶', type: ICON_TYPE.PET, isActive: false }
]

export default {
  components: {
    IconImage
  },
  data () {
    return {
      room: [],
      imgs: '',
      visible: false,
      index: 0,
      date: {},
      range: {
        start: '',
        end: ''
      },
      bookingDays: 0,
      disabledDates: [],
      ICON_TYPE,
      icons
    }
  },
  methods: {
    ...mapActions('loading', ['handleLoading']),
    ...mapActions('modal', ['handleModal', 'showBookingModal']),
    showMultiple () {
      this.imgs = this.room
      this.index = 0
      this.handleLightBox(true)
    },
    handleLightBox (showStatus) {
      this.visible = showStatus
    },
    handleSelect (value) {
      const { start, end } = value
      // this.bookingDays =
      //   parseInt(Math.abs(end - start) / 1000 / 60 / 60 / 24) + 1
      // console.log(this.bookingDays)
      // console.log(value, 'val')
      if (new Date(start) === new Date(end)) {
        this.range = {}
        console.log('----')
      }
    },
    openBookingModal () {
      this.showBookingModal({
        disabledDates: this.disabledDates,
        priceInfo: {
          normal: this.room[0].normalDayPrice,
          holiday: this.room[0].holidayPrice
        }
      })
    }
  },
  async mounted () {
    try {
      this.handleLoading(true)
      const response = await getInformation(this.$route.params.room_id)
      this.room = response.data.room
      const amenities = this.room[0].amenities
      this.icons = this.icons.map((icon) => {
        return {
          ...icon,
          isActive: amenities[icon.type]
        }
      })

      this.booking = response.data.booking
      this.disabledDates = this.booking.map(function (date) {
        return date.date
      })
    } catch (error) {
      console.warn(error)
    } finally {
      this.handleLoading(false)
    }
  }
}
</script>

<style lang="scss" scope>
.container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  .pictures {
    display: flex;
    box-shadow: 0px 5px 15px 0px #888888;
    .logo {
      background: url(../assets/index/logo_block.svg);
      background-repeat: no-repeat;
      position: absolute;
      width: 168px;
      height: 60px;
      top: 40px;
      left: 50px;
    }
    .pic1 {
      height: 596px;
      width: 860px;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .pic2 {
      height: 298px;
      width: 340px;
      background-position: center;
      background-size: cover;
    }
    .pic3 {
      height: 298px;
      width: 340px;
      background-position: center;
      background-size: cover;
    }
  }
  .information {
    display: flex;
    justify-content: space-evenly;
    text-align: left;
    padding: 50px;
    .room {
      width: 45%;
      h1 {
        font-size: 36px;
        color: #000000;
        letter-spacing: 3.76px;
        margin-top: 0;
        margin-bottom: 40px;
      }
      h3 {
        color: #000000;
        letter-spacing: 1.46px;
        line-height: 31px;
        margin-bottom: 10px;
      }
      p {
        font-size: 12px;
        color: #000000;
        letter-spacing: 1.25px;
        text-align: justify;
        line-height: 20px;
        margin-bottom: 30px;
      }
      .timeBox {
        display: flex;
        .time {
          width: 50%;
          h2 {
            font-size: 14px;
            color: #000000;
            letter-spacing: 1.46px;
            margin-bottom: 7px;
          }
          h4 {
            font-size: 21px;
            color: #000000;
            letter-spacing: 2.19px;
            margin: 0;
          }
        }
      }
    }
  }
}
.icons {
  background: #d8d5d5;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  padding: 25px 0 25px 25px;
  align-items: center;
  justify-content: center;
}
.fonts {
  width: 33%;
  margin-bottom: 20px;
  font-family: NotoSansCJKtc-Light;
  font-size: 12px;
  color: #3a3a3a;
  letter-spacing: 1.25px;
  display: flex;
  justify-content: left;
  align-items: center;
  opacity: 0.3;
  &.active {
    opacity: 1;
  }
  img {
    width: 25px;
    height: 25px;
    margin-right: 15px;
  }
}
.date {
  width: 50%;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  .prices {
    h2 {
      font-size: 30px;
      color: #000000;
      letter-spacing: 3.13px;
      text-align: right;
      margin: 0 0 5px 0;
    }
    h3 {
      font-size: 14px;
      color: #6d7278;
      letter-spacing: 1.46px;
      text-align: right;
      line-height: 27px;
      margin: 0 0 10px 0;
    }
    h4 {
      font-size: 16px;
      color: #000000;
      letter-spacing: 1.67px;
      text-align: right;
      line-height: 27px;
      margin: 0 0 3px 0;
    }
  }
  .calender {
    pointer-events: none;
    text-align: left;
    button {
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 1.67px;
      text-align: center;
      background: #575757;
      border: none;
      padding: 10px 25px;
      cursor: pointer;
      margin-top: 10px;
    }
  }
}
</style>

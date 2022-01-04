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
            @hide="handleHide"
          ></vue-easy-lightbox>
      <div class="logo" @click="$router.push({ name: 'Home' })"></div>
      <div class="pic1" :style="{ backgroundImage: `url(${item.imageUrl[2]})` }" @click="showMultiple"></div>
      <div>
        <div class="pic2" :style="{ backgroundImage: `url(${item.imageUrl[1]})` }" @click="showMultiple"></div>
        <div class="pic3" :style="{ backgroundImage: `url(${item.imageUrl[0]})` }" @click="showMultiple"></div>
      </div>
    </div>
    <div class="information">
      <div class="room">
        <div>
          <h1>{{ item.name }}</h1>
          <h3>房客人數限制： {{ item.descriptionShort.GuestMin }}~{{ item.descriptionShort.GuestMax }} 人</h3>
          <h3>床型：{{ item.descriptionShort.Bed[0] }}</h3>
          <h3>衛浴數量： {{ item.descriptionShort["Private-Bath"] }} 間</h3>
          <h3>房間大小： {{ item.descriptionShort.Footage }} 平方公尺</h3>
          <p>{{ item.description }}</p>
          <p>\</p>
          <div class="timeBox">
            <div class="time">
              <h2>Check In</h2>
              <h4>{{ item.checkInAndOut.checkInEarly}} - {{ item.checkInAndOut.checkInLate}}</h4>
            </div>
            <div class="time">
              <h2>Check Out</h2>
              <h4>{{ item.checkInAndOut.checkOut}}</h4>
            </div>
          </div>
        </div>
        <div class="icons">
          <div class="fonts" :class="{ active: item.amenities['Wi-Fi'] }"><img src="../assets/info/wifi.svg" alt="">Wi-Fi</div>
          <div class="fonts" :class="{ active: item.amenities['Television'] }"><img src="../assets/info/phone.svg" alt="">電話</div>
          <div class="fonts" :class="{ active: item.amenities['Great-View'] }"><img src="../assets/info/mountain-range.svg" alt="">漂亮的視野</div>
          <div class="fonts" :class="{ active: item.amenities.Breakfast }"><img src="../assets/info/breakfast.svg" alt="">早餐</div>
          <div class="fonts" :class="{ active: item.amenities['Air-Conditioner'] }"><img src="../assets/info/breeze.svg" alt="">空調</div>
          <div class="fonts" :class="{ active: item.amenities['Smoke-Free'] }"><img src="../assets/info/no-smoke-symbol.svg" alt="">禁止吸菸</div>
          <div class="fonts" :class="{ active: item.amenities['Mini-Bar'] }"><img src="../assets/info/bar.svg" alt="">Mini Bar</div>
          <div class="fonts" :class="{ active: item.amenities['Refrigerator'] }"><img src="../assets/info/wifi.svg" alt="">冰箱</div>
          <div class="fonts" :class="{ active: item.amenities['Child-Friendly'] }"><img src="../assets/info/crawling-baby-silhouette.svg" alt="">適合兒童</div>
          <div class="fonts" :class="{ active: item.amenities['Room-Service'] }"><img src="../assets/info/room_service.svg" alt="">Room Service</div>
          <div class="fonts" :class="{ active: item.amenities.Sofa }"><img src="../assets/info/wifi.svg" alt="">沙發</div>
          <div class="fonts" :class="{ active: item.amenities['Pet-Friendly'] }"><img src="../assets/info/dog.svg" alt="">寵物攜帶</div>
        </div>
      </div>
      <div class="date">
        <div class="prices">
          <h2>NT.{{ item.normalDayPrice}}</h2>
          <h3>平日(一~四)</h3>
          <h4>NT.{{ item.holidayPrice }}</h4>
          <h3>假日(五~日)</h3>
        </div>
        <div class="calender">
          <v-date-picker
            style="width: 80%"
            :modelValue="range"
            @drag="(val) => handleSelect(val)"
            is-range
            :disabled-dates="disabledDates"
          />
          <button @click="handleModal('ModalBooking')">預約時段</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getInformation } from '../api/index'

export default {
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
      disabledDates: []
    }
  },
  methods: {
    showMultiple () {
      this.imgs = this.room

      this.index = 0
      this.show()
    },
    show () {
      this.visible = true
    },
    handleHide () {
      this.visible = false
    },
    handleSelect (value) {
      const { start, end } = value
      this.bookingDays = parseInt(Math.abs(end - start) / 1000 / 60 / 60 / 24) + 1
      console.log(this.bookingDays)
      if (new Date(start) === new Date(end)) {
        this.range = {}
        console.log('----')
      }
    },
    ...mapActions('loading', ['handleLoading']),
    ...mapActions('modal', ['handleModal'])
  },
  async mounted () {
    try {
      this.handleLoading(true)
      const response = await getInformation(this.$route.params.room_id)
      this.room = response.data.room
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
    .room{
      width: 45%;
      h1{
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
  color: #3A3A3A;
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
      color: #6D7278;
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
    text-align: left;
    button {
      font-size: 16px;
      color: #FFFFFF;
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

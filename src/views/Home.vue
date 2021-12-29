<template>
  <div class="container">
    <div class="header">
      <div class="logo"></div>
      <div class="contactInfo">
        <div class="socialMedia">
          <a href="#"><span><i class="fab fa-facebook-square"></i></span></a>
          <a href="#"><span><i class="fab fa-instagram"></i></span></a>
        </div>
        <div class="info">
          <div>
            <span><i class="fas fa-phone-alt"></i></span>02-17264937
          </div>
          <div>
            <span><i class="fas fa-envelope"></i></span>whitespace@whitespace.com.tw
          </div>
          <div>
            <!-- <span><i class="fas fa-home"></i></span>台北市羅斯福路十段30號 -->
          </div>
        </div>
      </div>
    </div>
    <div class="roomList">
      <ul>
        <li v-for="room in rooms" :key="room.id">
          <div class="picture" :style="{ backgroundImage: `url(${room.imageUrl})` }" @click="goRoom(room.id)">
          </div>
          <div class="roomInfo">
            <h2>{{ room.name }}</h2>
            <div class="prices">
              <h3>單人房</h3>
              <h1>{{ room.normalDayPrice }}
                <span class="wday">平日</span>
                <span class="hday">{{ room.holidayPrice }} 假日</span>
              </h1>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getRooms } from '../api/index'

export default {
  date () {
    return {
      rooms: []
    }
  },
  methods: {
    goRoom (id) {
      this.$router.push(`/about/${id}`)
    },
    ...mapActions('loading', ['handleLoading'])
  },
  async mounted () {
    try {
      this.handleLoading(true)
      const response = await getRooms()
      this.rooms = response.data.items
      console.log(this.rooms)
    } catch (error) {
      console.warn(error)
    } finally {
      this.handleLoading(false)
    }
  }
}
</script>

<template>
  <div class="home">
    <div class="header">
      <div class="logo"></div>
      <div class="contactInfo">
        <div class="socialMedia">
          <a href="#"
            ><span><i class="fab fa-facebook-square"></i></span
          ></a>
          <a href="#"
            ><span><i class="fab fa-instagram"></i></span
          ></a>
        </div>
        <div class="info">
          <div>
            <span><i class="fas fa-phone-alt"></i></span>02-17264937
          </div>
          <div>
            <span><i class="fas fa-envelope"></i></span
            >whitespace@whitespace.com.tw
          </div>
          <div>
            <span><i class="fas fa-home"></i></span>台北市羅斯福路十段30號
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="roomList">
        <ul v-if="rooms.length > 0">
          <li v-for="room in rooms" :key="room.id">
            <Card :card="room" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Card from '@/components/Card.vue'

import { getRooms } from '../api/index'

export default {
  components: {
    Card
  },
  data () {
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
  async created () {
    try {
      this.handleLoading(true)
      const response = await getRooms()
      this.rooms = response.data.items
    } catch (error) {
      console.warn(error)
    } finally {
      this.handleLoading(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  // min-height: 100vh;
  margin: 0 auto;
  position: relative;
}
.header {
  position: relative;
  background: url(https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0 300px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    background: url(../assets/index/logo_white.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 130px;
    width: 230px;
    height: 230px;
  }
  .contactInfo {
    display: flex;
    .socialMedia {
      display: flex;
      align-items: center;
      margin-left: 70px;
      margin-right: 30px;
      margin-bottom: 20px;
      span {
        font-size: 30px;
        color: #ffffff;
        padding: 8px;
        border-bottom: 3px solid transparent;
        :hover {
          border-bottom: 3px solid black;
        }
      }
    }
    .info {
      border-left: 3px solid #fff;
      padding: 0 30px;
      div {
        font-size: 22px;
        color: #ffffff;
        text-align: start;
        padding-bottom: 15px;
        span {
          margin-right: 25px;
        }
      }
    }
  }
}
.roomList {
  position: relative;
  top: -200px;
  ul {
    margin: 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    li {
      position: relative;
      height: 350px;
      width: 25%;
      margin: 20px 50px;
      background: #f7f7f7;
      box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.18);
    }
  }
}
</style>

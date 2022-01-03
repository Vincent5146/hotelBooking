<template>
  <div class="card">
    <div
      class="picture"
      :style="{ backgroundImage: `url(${card.imageUrl})` }"
      @click="$emit('card:click')"
    ></div>
    <div class="roomInfo">
      <h2>{{ card.name }}</h2>
      <div class="prices">
        <h3>{{ card.name }}</h3>
        <h1>
          {{ card.normalDayPrice }}
          <span class="wday">平日</span>
          <span class="hday">{{ card.holidayPrice }} 假日</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default: () => ({
        holidayPrice: 1500,
        id: '',
        imageUrl: '',
        name: '',
        normalDayPrice: ''
      })
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  height: 350px;
  background: #f7f7f7;
  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.18);
  overflow: hidden;
  &:hover {
    .roomInfo {
      transform: translateY(0px);
    }
  }
  .picture {
    background: url(https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 280px;
  }
  .roomInfo {
    transition: transform 0.2s ease-in;
    flex-direction: column;
    overflow: hidden;
    display: flex;
    align-items: start;
    justify-content: center;
    position: absolute;
    bottom: 0;
    padding: 30px;
    width: 100%;
    box-sizing: border-box;
    background: #f7f7f7;
    transform: translateY(75px);
    h2 {
      font-size: 18px;
      color: #000000;
      letter-spacing: 1.5px;
      margin-bottom: 10px;
    }
    .prices {
      h3 {
        text-align: start;
        font-size: 12px;
        color: #666565;
        letter-spacing: 1.25px;
        margin-bottom: 40px;
      }
      h1 {
        font-size: 21px;
        color: #000000;
        letter-spacing: 2px;
        span {
          font-size: 12px;
          color: #666565;
          letter-spacing: 1.25px;
        }
        .wday {
          margin-right: 50px;
        }
      }
    }
  }
}
</style>

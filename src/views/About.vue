<template>
  <div class="container">
    <div class="pictures">
      <div class="logo"></div>
      <div class="pic1"></div>
      <div>
        <div class="pic2"></div>
        <div class="pic3"></div>
      </div>
    </div>
    <div class="information">
      <div class="room">
        <div>
          <h1>Single Room</h1>
          <h3>房客人數限制： 1~1 人</h3>
          <h3>床型：單人床</h3>
          <h3>衛浴數量： 1 間</h3>
          <h3>房間大小： 18 平方公尺</h3>
          <p>Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom.
             Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided.
             In the room there is AC and of course WiFi.
          </p>
          <div class="timeBox">
            <div class="time">
              <h2>Check In</h2>
              <h4>15:00 - 21:00</h4>
            </div>
            <div class="time">
              <h2>Check Out</h2>
              <h4>10:00</h4>
            </div>
          </div>
        </div>
        <div class="icons">
          <div class="fonts"><img src="../assets/info/wifi.svg" alt="">Wi-Fi</div>
          <div class="fonts"><img src="../assets/info/phone.svg" alt="">電話</div>
          <div class="fonts"><img src="../assets/info/mountain-range.svg" alt="">漂亮的視野</div>
          <div class="fonts"><img src="../assets/info/breakfast.svg" alt="">早餐</div>
          <div class="fonts"><img src="../assets/info/breeze.svg" alt="">空調</div>
          <div class="fonts"><img src="../assets/info/no-smoke-symbol.svg" alt="">禁止吸菸</div>
          <div class="fonts"><img src="../assets/info/bar.svg" alt="">Mini Bar</div>
          <div class="fonts"><img src="../assets/info/wifi.svg" alt="">冰箱</div>
          <div class="fonts"><img src="../assets/info/crawling-baby-silhouette.svg" alt="">適合兒童</div>
          <div class="fonts"><img src="../assets/info/room_service.svg" alt="">Room Service</div>
          <div class="fonts"><img src="../assets/info/wifi.svg" alt="">沙發</div>
          <div class="fonts"><img src="../assets/info/dog.svg" alt="">寵物攜帶</div>
        </div>
      </div>
      <div class="date">
        <div class="prices">
          <h2>NT.1380</h2>
          <h3>平日(一~四)</h3>
          <h4>NT.1500</h4>
          <h3>假日(五~日)</h3>
        </div>
        <div class="calender">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .logo {
    background: url(../assets/index/logo_block.svg);
    background-repeat: no-repeat;
    position: absolute;
    width: 168px;
    height: 60px;
    top: 40px;
    left: 50px;
  }

  .pictures {
    display: flex;
    box-shadow: 0px 5px 15px 0px #888888;
  }
  .pic1 {
    background: url(https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80);
    height: 596px;
    width: 860px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .pic2 {
    background: url(https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
    height: 298px;
    width: 340px;
    background-position: center;
    background-size: cover;
  }
  .pic3 {
    background: url(https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80);
    height: 298px;
    width: 340px;
    background-position: center;
    background-size: cover;
  }

  .information {
    display: flex;
    text-align: left;
    padding: 50px;
  }

  .room{
    width: 45%;
  }
  .room h1{
    font-size: 36px;
    color: #000000;
    letter-spacing: 3.76px;
    margin-top: 0;
    margin-bottom: 40px;
  }
  .room h3 {
    color: #000000;
    letter-spacing: 1.46px;
    line-height: 31px;
  }
  .room p {
    font-size: 12px;
    color: #000000;
    letter-spacing: 1.25px;
    text-align: justify;
    line-height: 20px;
  }
  .timeBox {
    display: flex;
  }
  .timeBox .time {
    width: 50%;
  }
  .timeBox h2 {
    font-size: 14px;
    color: #000000;
    letter-spacing: 1.46px;
  }
  .timeBox h4 {
    font-size: 21px;
    color: #000000;
    letter-spacing: 2.19px;
    margin: 0;
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
    color: #000000;
    letter-spacing: 1.25px;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .fonts img {
    width: 25px;
    height: 25px;
    margin-right: 15px;
  }

  .date {
    width: 50%;
    display: flex;
    margin-left: 35px;
  }
  .date h2 {
    font-size: 30px;
    color: #000000;
    letter-spacing: 3.13px;
    text-align: right;
    margin: 0 0 5px 0;
  }
  .date h3 {
    font-size: 14px;
    color: #6D7278;
    letter-spacing: 1.46px;
    text-align: right;
    line-height: 27px;
    margin: 0 0 10px 0;
  }
  .date h4 {
    font-size: 16px;
    color: #000000;
    letter-spacing: 1.67px;
    text-align: right;
    line-height: 27px;
    margin: 0 0 5px 0;
  }

</style>

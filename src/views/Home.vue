<template>
  <div class="background">
    <div class="header">
      <div class="logo">
      </div>
      <div class="roomList">
        <ul>
          <li><a href="">Single Room</a></li>
          <li><a href="">Deluxe Single Room</a></li>
          <li><a href="">Double Room</a></li>
          <li><a href="">Deluxe Double Room</a></li>
          <li><a href="">Twin Room</a></li>
          <li><a href="">Deluxe Twin Room</a></li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="room">
        <h2>04</h2>
        <h3>Deluxe Double Room</h3>
      </div>
      <div class="contactInfo">
        <div class="fonts">
          <a href="#"><span><i class="fab fa-facebook-square"></i></span></a>
          <a href="#"><span><i class="fab fa-instagram"></i></span></a>
        </div>
        <div><span><i class="fas fa-phone-alt"></i></span>02-17264937</div>
        <div><span><i class="fas fa-envelope"></i></span>whitespace@whitespace.com.tw</div>
        <div><span><i class="fas fa-home"></i></span>台北市羅斯福路十段30號</div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
  .background {
    margin: 0 auto;
    width: 1200px;
    height: 800px;
    background: url(https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
    background-position: center;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    background: url(../assets/index/logo_white.svg);
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: 50px;
    margin-left: 54px;
    height: 175px;
    width:175px;
  }
  .roomList {
    width: 305px;
    background: #FFFFFF;
    font-size: 14px;
    color: #000000;
    letter-spacing: 1.46px;
    margin-top: 48px;
    padding: 20px 0;
  }
  .roomList ul {
    list-style: none;
    text-align: left;
  }
  .roomList li {
    margin-bottom: 40px;
    position: relative;
  }
  .roomList li a {
    text-decoration: none;
  }
  .roomList li a:hover {
    color: salmon;
  }
  .roomList a:hover::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 2px;
    background: black;
    left: -40px;
    top: 8px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
  }
  .room {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 70px;
    margin-bottom: 70px;
  }
  .room h2 {
    margin: 0;
    font-family: NotoSansCJKtc-DemiLight;
    font-size: 66px;
    color: #FFFFFF;
    text-align: start;
  }
  .room h3 {
    margin: 0;
    font-family: NotoSansCJKtc-DemiLight;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 2.51px;
  }
  .contactInfo {
    display: flex;
    flex-direction: column;
    margin-right: 80px;
    margin-bottom: 50px;
  }
  .contactInfo .fonts {
    display: flex;
    align-items: start;
    margin-bottom: 60px;
  }
  .contactInfo .fonts span {
    font-size: 22px;
    color: #FFFFFF;
    border-bottom: 2px solid transparent;
  }
  .contactInfo .fonts span:hover {
    font-size: 22px;
    color: #FFFFFF;
    border-bottom: 2px solid black;
  }
  .contactInfo div {
    font-family: NotoSansCJKtc-DemiLight;
    font-size: 14px;
    color: #FFFFFF;
    text-align: start;
    margin: 0 0 10px 0;
  }
  .contactInfo span {
    font-size: 18px;
    margin-right: 10px;
  }
</style>

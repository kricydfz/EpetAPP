<template>
    <div>
      <header>
        <div class="bg-head">
          <div class="head_top">
            <a href="" class="goback" @click="history.go(-1)"></a>
            <div class="block">
              <router-link to="/myPet/register">注册</router-link>

            </div>
          </div>
          <div class="mid">
            <img src="./logo.png" alt="">
          </div>
          <div class="tabs">
            <ul>
              <li @click="setLoginWay(true)" :class="{current:loginWay}" >
                <a href="#">普通登录</a>
              </li>
              <li @click="setLoginWay(false)" :class="{current:!loginWay}">
                <a href="#">手机登录</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="contentWrap">
        <!--form 表单-->
        <div class="formbox">
          <div class="content">
            <form action="#">
              <div class="form_content1" v-if="loginWay">
                <ul>
                  <li>
                    <span class="icon icon1"></span>
                    <input type="text" name="username" id="username" placeholder="手机号/邮箱">
                  </li>
                  <li>
                    <span class="icon icon2"></span>
                    <input type="password" id="password" name="password" placeholder="密码">

                  </li>
                </ul>

              </div>
              <div class="form_content2" v-else>
                <ul>
                  <li>
                    <span class="icon icon3"></span>
                    <input type="text" name="phoneNumber" id="phoneNumber" placeholder="已注册的手机号">
                  </li>
                  <li>
                    <span class="icon icon2"></span>
                    <input type="text" id="wordicon" name="wordicon" placeholder="请输入图片内容">
                    <span class="img">
                      <img src="./seccode.png" alt="">
                    </span>
                  </li>
                  <li>
                    <span class="icon icon2"></span>
                    <input type="password" name="password" id="password1" placeholder="动态密码">
                    <a href="#" class="getPhone">获取动态密码</a>
                    <a href="#" class="getPhone bff">
                      <span id="time"></span>
                      短信已发送
                    </a>
                  </li>
                </ul>

              </div>
            </form>
          </div>

        </div>
        <div class="forget">
          <a href="">忘记密码？</a>
        </div>
        <div class="login">
          <a href="">登录</a>
        </div>
        <div class="picBox">
          <span>合作网站</span>
          <div class="pimg">
            <a href="#"><img src="./login_ico4.png" alt=""></a>
            <a href="#"><img src="./login_ico2.png" alt=""></a>

          </div>
        </div>
      </div>

    </div>
</template>
<script>
  import register from '../register/register.vue'
  export default{
    data(){
      return{
        loginWay:true
      }
    },
    methods:{
      setLoginWay(loginWay) {
        this.loginWay = loginWay
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  header
    width 100%
    height 178px
    .bg-head
      height 178px
      width 100%
      background-image url("./bg-img.png")
      background-repeat no-repeat
      .head_top
        position relative
        width 100%
        height 50px
        line-height 50px
        text-align center
        padding 0 12px
        overflow hidden
        &>.goback
          display block
          position absolute
          left 12px
          bottom 14px
          margin-top 16px
          height 20px
          width 22px
          background url(./back.png) no-repeat
          background-size 12px 17px

        .block
          position absolute
          top 0
          right 10px
          font-size 16px
          a
            color #fff



      .mid
        width 100%
        height 88px
        padding  12px 0 24px 0
        box-sizing border-box
        img
          display block
          vertical-align middle
          margin auto
          width 20%

      .tabs
        width 100%
        height 44px
        background-color rgba(255,255,255,0.3)
        ul
          width 100%
          height 100%
          overflow hidden
          text-align center
          line-height 44px
          .current
            background: #82f705;
          li
            width 50%
            height 100%
            float left
            a
              color #ffffff
              font-size 16px
              text-align center
  .contentWrap
    width 100%
    background-color #ffffff
    .formbox
      width 333px
      //height 92px
      margin 0 15px 12px
      padding 0 6px
      .content
        width 100%
        height 100%
        & .form_content1
          width 100%
          ul
            width 100%
            height 100%
            li
              position relative
              height 46px
              padding 12px 0 12px 30px
              border-bottom #e2e2e2 solid 1px
              width 100%
              .icon
                float left
                display inline
                width 17px
                height 21px
                margin 1px 0 0 -25px
                &.icon1
                  background url(./ico3.png) no-repeat
                  background-size contain
                &.icon2
                  background url(./ico4.png) no-repeat
                  background-size contain
              input
                width 100%
                height 21px
                font-size 15px
                color #666
                border none
                outline none
                display block

        & .form_content2
          width 100%
          ul
            width 100%
            height 100%
            li
              position relative
              height 46px
              padding 12px 0 12px 30px
              border-bottom #e2e2e2 solid 1px
              width 100%
              .icon
                float left
                display inline
                width 17px
                height 21px
                margin 1px 0 0 -25px
                &.icon1
                  background url(./ico3.png) no-repeat
                  background-size contain
                &.icon2
                  background url(./ico4.png) no-repeat
                  background-size contain
                &.icon3
                  background url(./ico1.png) no-repeat
                  background-size contain
              input
                width 100%
                height 21px
                font-size 15px
                color #666
                border none
                outline none
                display block
              .img
                display block
                position absolute
                right 0px
                top 5px
                img
                  vertical-align middle
              .getPhone
                text-align center
                position absolute
                top 6px
                right 0
                padding 3px 0
                color #ff4259
                font-size 12px
                border-radius 3px
                border 1px solid #eb4c33
                &.bff
                  background #f5f5f5
                  border 1px solid #b8b8b8
                  color #b8b8b8
    &>.forget
      width 100%
      overflow hidden
      padding 0 2px
      text-align center
      a
        float right
        text-align center
        color #898989
        font-size 14px
    .login
      width 100%
      height 44px
      padding-top 5px
      text-align center
      line-height 20px

      a
        display block
        letter-spacing 5px
        margin 0 15px
        padding 9px 0
        text-align center
        font-size 15px
        color #ffffff
        background #2ec975
    .picBox
      width 100%
      margin-top 60px
      span
        display block
        font-size 18px
        text-align center
        color #d7d7d7
      .pimg
        margin-top 10px
        a
          float left
          display block
          width 33.3%
          text-align center
          img
            vertical-align middle
            width 60%
            margin auto

</style>

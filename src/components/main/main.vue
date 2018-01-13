<template>
<div>
  <div class="contentWapper">
    <div class="content">
      <!--TODO 轮播区-->
      <div class="mt-swipe">
        <mt-swipe @change="handleChange" v-if="home.datas">
          <mt-swipe-item v-for="(item,index) in home.datas[0].value" :key="index">
            <img :src="item.image" alt="">
          </mt-swipe-item>

        </mt-swipe>
      </div>
      <!--TODO 分类区-->
      <div class="columnnav">
        <ul v-if="home.datas">
          <li v-for="(pic,index) in home.datas[2].menus" :key="index">
            <a href="#"><img :src="pic.image" alt=""></a>
          </li>
        </ul>
      </div>
      <!--todo 新人专享图片-->
      <div class="photo">
        <a href="#"><img src="./xinren.gif" alt=""></a>
      </div>
      <!--TODO 抢购区-->

      <div class="buy-index" v-if="homeb.data">
        <div class="buy_top" >

          <div class="left-img">
            <img :src="homeb.data['3'].surprise_icon.image" alt="">
          </div>
          <div class="Seckill">{{homeb.data['3'].title}}</div>
          <div class="time-list">
            <ul class='time-item'>
              <li>0</li>
              <li>0</li>
              <li>:</li>
              <li>0</li>
              <li>0</li>
              <li>:</li>
              <li>0</li>
              <li>0</li>
            </ul>
          </div>
          <div class="img_right">
            <a href=""><img src="../../images/more1.png" alt=""></a>
          </div>
        </div>
        <div class="buy_list" ref="list"  >
          <ul class="contentQ" v-if="homeb.data">

            <li v-for="(lis,index) in homeb.data['3'].goods" :key="index">
              <a href="#">
                <img :src="lis['image']['image']" alt="">
                <span>￥{{lis.sale_price}}</span>
                <p>{{lis.little_price}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--图片类-->
      <div class="photo1">
        <a href="#"><img src="./p1.jpg" alt=""></a>
      </div>
      <div class="photoWrapper">
        <div class="photoW1">
          <a href="#"><img src="./p2.jpg" alt=""></a>
        </div>
        <div class="photoW2">
          <a href="#"><img src="./p3.jpg" alt=""></a>
          <a href="#"><img src="./p4.jpg" alt=""></a>
        </div>
      </div>
      <div class="photo2">
        <div class="photoL">
          <div class="left_img">
            <a href="#"><img src="./p5.jpg" alt=""></a>
          </div>
          <div class="more">
            <a href="#"><img src="./more1.png" alt=""></a>
          </div>
        </div>
      </div>

      <!--TODO current image-->
      <pictureL :home="home" ></pictureL>
      <!--{{home.datas}}-->
      <split/>
     <!-- <div class="imgWrap">
        <div class="imgList">
          <a href="#"><img src="./imgl.jpg" alt=""></a>
        </div>
      </div>
      <split/>
      <div class="imgWrap">
        <div class="imgList">
          <a href="#"><img src="./imgl.jpg" alt=""></a>
        </div>
      </div>
      <split/>
      <div class="imgWrap">
        <div class="imgList">
          <a href="#"><img src="./imgl.jpg" alt=""></a>
        </div>
      </div>
      <split/>
      <div class="imgWrap">
        <div class="imgList">
          <a href="#"><img src="./imgl.jpg" alt=""></a>
        </div>
      </div>
      <split/>
      <div class="imgWrap">
        <div class="imgList">
          <a href="#"><img src="./imgl.jpg" alt=""></a>
        </div>
      </div>
      <split/>-->
      <viedoSmall v-if="home.datas" :video="home.datas['12'].value" :title="home.datas['11'].value"/>
      <viedoSmall v-if="home.datas" :video="home.datas['12'].value" :title="home.datas['11'].value"/>
    </div>
  </div>
  <!--todo 切换区-->
  <!--<transition name="godog">-->
    <div class="switchtype">
      <div class="imgL" @click="toggleShow"></div>
    </div>
  <!--</transition>-->

  <!--todo 遮罩层-->
  <transition name="animate">
    <div class="mask" v-show="isShow">
      <div class="main">
        <p class="p1">
          DOG
          <b class="line">_</b>
        </p>
        <p class="p2">亲爱的小主</p>
        <p class="p3">您将进入狗狗站</p>
        <ul>
          <li class="dog">
            <img src="./change-cat.png" alt="">
            <div class="pet1name">狗狗站</div>
          </li>
          <li class="main_pet">
            <img src="./change-cat.png" alt="">
            <div class="pet2name">水族站</div>
            <b class="line1">_</b>
            <a href="#">立即进入</a>
          </li>
          <li class="cat">
            <img src="./change-cat.png" alt="">
            <div class="pet3name">猫猫站</div>
          </li>
        </ul>
      </div>
      <div class="mask-footer" @click="toggleShow">
        <img src="./close2.png" alt="">
      </div>

    </div>
  </transition>

</div>
</template>
<script>

  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import viedoSmall from '../viedoSmall/viedoSmall.vue'
  import picture from '../picture/picture.vue'
  export default{
    mounted(){
     let scrollY=new BScroll('.contentWapper',{
       click:true,
       scrollY:true
     })
      this.$store.dispatch('requestHome')
      //this.$store.dispatch('requestHomeB')
       this.$store.dispatch('requestHomeB',()=>{
         this.$nextTick(()=>{
           this.picScroll=new BScroll('.buy_list',{
             click:true,
             scrollX:true

           })
         })
       })


    },
    data(){
      return{
        isShow:false
      }
    },
    methods: {
      handleChange(){

      },
      toggleShow(){
        this.isShow=!this.isShow
      }
    },
    computed:{
      ...mapState(['home','homeb']),

    },
    components:{
      viedoSmall,
      pictureL:picture
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .contentWapper
    height 458px
    overflow hidden
    .mt-swipe
      width 100%
      height 160px
      img
        display block
        width 100%
    .columnnav
      width 100%
      height 100%
      ul
        overflow hidden
        &>li
          float left
          width 75px
          img
            display block
            width 100%
    .photo
      width 100%
      height 120px
      img
        width 100%
    .buy-index
      width 100%
      height 200px
      .buy_top
        position relative
        width 100%
        height 60px
        padding 10px
        text-align center
        line-height 60px
        .left-img
          float left

          &>img
            height 24px
            margin-left -20px
            vertical-align middle

        .Seckill
          float left
          margin-left 10px
        .time-list
          height 100%
          float left
          margin-left 5px
          text-align center

          &>ul
            width 75.5px
            overflow hidden
            &>li
              float left
              width 8px
              /*height 25px*/
              /*line-height 25px*/
              text-align center
        .img_right
          position absolute
          right 20px
          top 20px
          &>a
            display block
            text-align right
            img
              width 60%
      .buy_list
        position relative
        width 100%
        height 140px
        padding-left 5px
        margin-bottom 10px
        &>ul
          position absolute
          left 0
          top 0
          overflow hidden
          text-align center
          white-space nowrap
          display flex
          min-width 320px

          &>li
            float left
            margin 10px
            a
              display block
              width 100%
              color #333333

              img
                display block
                height 85px
              span
                color red
                text-align center
                margin-top 5px
              p
                color #999
                text-align center
                font-size 12px
    .photo1
      width 100%
      height 185px
      img
        width 100%
    .photoWrapper
      width 100%
      height 250px
      display flex
      .photoW1
        width 50%
        height 100%
        &>a
          display block
          &>img
            width 100%
      .photoW2
        width 50%
        height 100%
        &>a
          display block
          &>img
            width 100%

    .photo2
      width 100%
      height 88px
      padding-top 10px
      .photoL
        position relative
        padding-bottom 5px
        text-align center
        height 100%
        .left_img
          width 100%
          height 100%
          &>a
            display block
            img
              display block
              /*width 100%*/
              max-width 100%
              max-height 73px
              margin 0 auto 0 10px
        .more
          position absolute
          top 30px
          right 10px
          text-align right
          img
            width 50%
            margin 0 0 0 auto



    .imgWrap
      width 100%
      .imgList
        width 100%
        height 160px
        &>a
          display block
          &>img
            width 100%



  .switchtype
    width 100%
    .imgL
      z-index 2
      width 41px
      height 46px
      position fixed
      right -1px
      bottom 10%
      background-image url("./godog.png")
      background-repeat no-repeat
      background-size 200% auto
      animation petDog 2s infinite steps(2)
      @keyframes petDog
        from
          background-position -42px
        to
          background-position 41px


  .mask
    z-index 100
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    background #fff
    padding 50% 0
    &.animate-enter-active,.animate-leave-active
      animation: bounce-out .5s ease
    &.animate-enter,&.animate-leave-to
      animation: bounce-out .5s ease reverse
    @keyframes bounce-out
      from
        transform: scale(0)
      to
        transform: scale(1)
    .main
      max-width  670px
      margin auto
      p
        display block
      .p1
        position relative
        font-size 16px
        color #999
        text-align center
        .line
          position absolute
          bottom -4px
          left 0
          font-size 12px
          color #000
          text-align center
      .p2
        text-align center
        font-size 16px
        color #666
        margin-top 20px
        width 100%
      .p3
        text-align center
        font-size 20px
        color #333
      ul
        min-width 305px
        padding-left 15%
        margin-top 35px
        text-align center
        overflow hidden
        li
          float left
        .dog
          margin-top 21%
          width 25%
          text-align center
          img
            max-width 70%
          pet1name
            margin-top 5px
            font-size 12px
            color #999
        .cat
          margin-top 21%
          width 25%
          text-align center
          img
            max-width 70%
          pet3name
            margin-top 5px
            font-size 12px
            color #999
        .main_pet
          margin-top 14%
          width 40%
          text-align center
          color #039ddf
          .line1
            width 100%
            position absolute
            top -58px
            left 0
            text-align center
          a
            width 78px
            height 25px
            display inline-block
            background #4e9a36
            padding 3px 15px
            margin-top 25px
            font-size 12px
            border-radius 40%
            color #ffffff

          pet2name
            margin-top 5px
          img
            max-width 80%

    .mask-footer
      position fixed
      bottom 20px
      left 0
      border-top 1px solid #e7e7e7
      text-align center
      width 100%
      height 40px
      line-height 50px
      img
        //display block
        vertical-align middle
        width 23px
        text-align center
        line-height 23px
</style>

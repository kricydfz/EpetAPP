<template>
  <!--抢购组件-->
  <div class="buy-index">
    <div class="buy_top">
      <div class="left-img">
        <img src="./2.jpg" alt="">
      </div>
      <div class="Seckill">距离本场结束</div>
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
    <div class="buy_list">
      <ul>
        <li>
          <a href="#">
            <img src="./pet.jpg" alt="">
            <span>￥166</span>
            <p>省￥14.95</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./pet.jpg" alt="">
            <span>￥166</span>
            <p>省￥14.95</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./pet.jpg" alt="">
            <span>￥166</span>
            <p>省￥14.95</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./pet.jpg" alt="">
            <span>￥166</span>
            <p>省￥14.95</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
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

        &>ul
          width 75.5px
           overflow hidden
          &>li
            float left
            width 8px
            height 25px

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
      width 100%
      height 140px
      padding-left 5px
      margin-bottom 10px
      &>ul
        overflow hidden
        &>li
          float left
          width 20%
</style>

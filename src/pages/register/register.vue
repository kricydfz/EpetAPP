<template>
    <div class="register">
      <div class="register_before">
        <div class="before_head">
          <span class="icon icon3"></span>
          <input type="text" placeholder="请输入手机号">
        </div>
        <div class="btn">
          <span><a href="">下一步</a></span>
        </div>
      </div>
    </div>
</template>
<script>
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .register
    width 100%
    height 100%
    position absolute
    background #ffffff
    top 0
    left 0
    bottom 0
    z-index 100
    .before_head
      width 100%
      height 50px
      padding 10px 12px
      span
        float left
        display inline-block
        width 17px
        height 17px
        background url(../login/ico1.png) no-repeat
        background-size contain
        margin 6px 0 0 6px
      input
        width 80%
        border none
        outline none
        border-bottom #e2e2e2 solid 1px


        padding 12px 0 12px 17px


    .btn
      width 100%
      margin-top 20px
      padding-top 15px
      text-align center
      & a
        display block
        margin 0 10%
        background #f03131
        color #ffffff
        font-size 15px
        padding 5px 0
        border-radius 30px
        text-align center

</style>

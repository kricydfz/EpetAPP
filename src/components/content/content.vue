<template>
  <!--tab 区-->
    <div class="tab-index" ref="wrapper">
      <ul class="tab-list">
        <li><a href="###"class="current">首页</a></li>
        <li><a href="###">服饰城</a></li>
        <li><a href="###">狗狗站</a></li>
        <li><a href="###">购物零食</a></li>
        <li><a href="###">美容</a></li>
        <li><a href="###">首页</a></li>
        <li><a href="###">首页</a></li>
        <li><a href="###">首页</a></li>
        <li><a href="###">首页</a></li>
      </ul>
    </div>
  <!--轮播区-->
  <!--<div class="mt-swipe">

    <mt-swipe @change="handleChange">
      <mt-swipe-item>
        <img src="../../images/LB4.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/LB1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/LB2.png" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>-->
</template>
<script>
  import BScroll from 'better-scroll'

  export default{
    mounted(){
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click:true,
          scrollX:true
        })
      })
    },
    methods:{
//      handleChange(){
//
//      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">


.tab-index
  width 100%
  height 35px
  margin-bottom 10px
  .tab-list
    width 600px
    height 100%
    white-space nowrap
    display flex
    min-width 320px
    &>li
      float left
      margin 0 10px
      width 74px
      &>a
        display block
        width 100%
        height 100%
        font-size 14px
        text-align center
        color #666
        line-height 36px
        &.current
          color #389C42
          border-bottom 2px solid #389C42

 </style>

<template>
    <div>
      <div class="top_bar_wrap">
        <header class="bar_head">
          <a href="" class="goback">
            <img src="" alt="">
          </a>
          <span>购物车</span>
          <span class="right_img"></span>
        </header>
        <div class="header_hide"></div>
      </div>
      <div class="cartBox"></div>
    </div>
</template>
<script>
  export default{
    data(){
      return{
        isShow:true
      }
    },
    methods:{
      toggleShow(){
        this.isShow=!this.isShow
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .bar_head
    top 50px
    line-height 50px
    padding 0 12px
    border-bottom 1px solid #f3f3f3
</style>

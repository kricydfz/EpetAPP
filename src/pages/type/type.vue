<template>
    <div class="typeWapper">
      <!--todo 头部-->
     <header class="index-top">
       <div class="tab tab1">
         <router-link to="/type/classify">
           <span>分类</span>
         </router-link>

       </div>
       <div class="tab tab2">
         <router-link to="/type/brands">
           <span>品牌</span>
         </router-link>

       </div>
       <a href="#"><img src="./search.png" class="search"></a>
     </header>

      <router-view/>

    </div>
</template>
<script>


  export default{

 }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .index-top
    z-index 4
    position fixed
    left 0
    top 0
    bottom 0
    width 100%
    height 40px
    padding 0 15px
    border-bottom 1px solid #cbcbcb
    .tab
      float left
      width 50%
      height 40px
      line-height 40px
      span
        height 40px
        padding 0 4px
        display inline-block

    .tab1
      text-align right
      padding-right 5%
      font-size 13px
    .tab2
      text-align left
      padding-left 5%
      font-size 13px
    .active
      border-bottom 2px solid #ed4044
      color #ed4044


  a
    .search
      position absolute
      top 13px
      right 15px
      width 14px
      height 14px
      vertical-align middle







</style>

<template>
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

      <!--tab 区-->
      <!--<div class="find_nav">
        &lt;!&ndash;<scroller>&ndash;&gt;
        <div class="find_nav_left dscroll">
           <div class="find_nav_list dscroll-div">
             <ul class="dscroll-ul">
               <li class="dscroll-li">
                 <a href="#" class="current">
                   <span>首页</span>
                   &lt;!&ndash;<i></i>&ndash;&gt;
                 </a>
               </li>
               <li class="dscroll-li">
                 <a href="#">
                   <span>服饰城</span>
                   &lt;!&ndash;<i></i>&ndash;&gt;
                 </a>
               </li>
               <li class="dscroll-li">
                 <a href="#">
                   <span>狗狗主粮</span>
                   <i></i>
                 </a>
               </li>
               <li class="dscroll-li">
                 <a href="#">
                   <span>医疗保健</span>
                   &lt;!&ndash;<i></i>&ndash;&gt;
                 </a>
               </li>
               <li class="dscroll-li">
                 <a href="#">
                   <span>零食玩具</span>
                   &lt;!&ndash;<i></i>&ndash;&gt;
                 </a>
               </li>
               <li class="dscroll-li">
                 <a href="#">
                   <span>日出外用</span>
                   &lt;!&ndash;<i></i>&ndash;&gt;
                 </a>
               </li>
               <li class="dscroll-li">
                 <a href="#">
                   <span>美容香波</span>
                   &lt;!&ndash;<i></i>&ndash;&gt;
                 </a>
               </li>
             </ul>

           </div>
        </div>
        &lt;!&ndash;</scroller>&ndash;&gt;
      </div>-->
      <!--TODO 轮播区-->

    </div>
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
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
/*
.find_nav
  width 100%
  height 35px
  min-width 320px
.dscroll
  overflow-x auto
  overflow-y hidden

  .dscroll-ul
    white-space: nowrap
    display: flex
    .dscroll-li
      float left
      width 74px
      margin 0 10px
      a
        display block
        width 100%
        height 100%
        font-size 14px
        text-align center
        color #666
        line-height 36px
      .current
        color #389C42
        border-bottom 2px solid #389C42

*/

.tab-index
  /*width 100%*/
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



/*
.index_carousel
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  !*索引定位*!
  position: relative;
  !*小图标*!
  .index_carousel_images
    !*4倍宽度  横向 四张图片*!
    width: 600%;
    -webkit-transform: translateX(-16.667%);
    transform: translateX(-16.667%);
    li
      float: left;
      width: 16.6667%
      a
        display: block;
        width: 100%
        img
          display: block;
          width: 100%



*/


</style>

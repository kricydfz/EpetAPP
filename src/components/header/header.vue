<template>
    <div>
      <div class="headNav" v-if="isShow">
        <div class="pic">
          <img src="./1.jpg" alt="">
        </div>

        <span class="close" @click="hide">
          <img src="./closebtn_03.png" alt="">
        </span>
      </div>
      <!--todo 搜索区-->
      <div class="searchWrap">
        <div class="epet-search bgf">
          <div class="searchContent">
            <a href="">
              <span class="catordog c89">狗狗站</span>
              <span class="c89"> | </span>
              <span class="myposition c89 ft13">重庆</span>
              <i></i>
            </a>
          </div>
          <p class="search-text">
            <a href="#">
              <input class="search" type="text" placeholder="搜索商品和品牌">
              <span class="eico serach-ico"></span>
            </a>
          </p>
          <a href="">
            <img src="./mydope.png" alt="">
          </a>
        </div>
      </div>
      <!--TODO tab 区-->
      <div class="tab-index" ref="tab_wrapper">
        <ul class="tab-list">
          <li v-for="(tab,index) in home.menus" :key="index">
            <a :href="tab.menu_target">{{tab.menu_name}}</a></li>

        </ul>
      </div>
     </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        isShow:true
      }
    },
    mounted(){
      this.$store.dispatch('requestHome',()=>{
        this.$nextTick(() => {
          this.tabScroll = new BScroll(this.$refs.tab_wrapper, {
            click: true,
            scrollX: true
          })
        })
      })

    },
    methods:{
      hide(){
       this.isShow=!this.isShow
      }
    },
    computed:{
      ...mapState(['home'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .headNav
    /*position absolute
    top 0
    right 0*/
    width 100%
    //height 100%
    .close
      width 5%
      margin-left 2%
      position absolute
      left 10px
      top 25px
      img
        width 100%
        height auto
    .pic
      width 100%
      img
        width 100%


  .searchWrap
    padding 5px 10px

    .epet-search
      overflow hidden
      padding 8px 0
      background #ffffff
      text-align center

      .searchContent
        float left
        margin-right 20px
      .search-text
        float left
        position relative
        a>input
          width 100%
          border: 0
          height: 25px
          background: #e9e9e9
          border-radius: 4px
          color: #bcbcbc
          text-indent: 10px
          font-size: 13px
          outline: 0
        a>span
          background: url(./search.png) no-repeat
          background-size: 11px auto
          width: 11px
          height: 11px
          position: absolute
          right: 5px
          top: 0
          bottom: 0
          margin: auto 0
          background-position: 0 0
      a
        float left
        img
          width 25px
          margin-left 10px
          vertical-align middle




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
      &>:first-child
        color #389C42
        border-bottom 2px solid #389C42
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
          /*&.current
            color #389C42
            border-bottom 2px solid #389C42*/




</style>

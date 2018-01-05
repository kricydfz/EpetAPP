<template>
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
</template>
<script>
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">

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




   /* .serach-ico
      width 11px
      height 11px
      position absolute
      right 5px
      top 0
      bottom 0
      margin auto 0
      background-position 0 0*/



</style>

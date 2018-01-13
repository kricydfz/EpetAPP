<template>
    <div class="brands-index" ref="brandsWrapper">
      <div class="content-wrap">
        <div class="brand-content" v-for="(brand ,index) in brands.brand" :key="index">
          <div class="recomend">
            <span>—— {{brand.title}} ——</span>
          </div>
          <div class="main">
            <ul v-if="brand.list">
              <li v-for="(brandP,index) in brand.list" :key="index">
                <a href="#">
                  <div class="bg_img">
                    <img :src="brandP.logo" alt="">
                  </div>

                  <p class="name">{{brandP.name}}</p>
                  <p class="address">{{brandP.address}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>



    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState}from 'vuex'
  export default{
    mounted(){
      this.$store.dispatch('requestBrands',()=>{
        this.$nextTick(()=>{
          this.brandsScroll=new BScroll(this.$refs.brandsWrapper,{
            click:true,
            scrollY:true
          })
        })
      })

    },
    computed:{
      ...mapState(['brands'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .brands-index
    width 100%
    height 555px
    overflow hidden
    margin-top 45px
    padding-bottom 45px
    background #f3f4f5
    .brand-content
      background #ffffff
      padding-bottom 15px
      margin-bottom 10px
      .recomend
        width 100%
        height 40px
        text-align center
        padding-top 20px
      .main
        padding 0 5px
        overflow hidden
        ul
          width 100%
          float left
          li
            position relative
            width 33.3%
            float left
            margin-top 20px
            padding 0 5px
            p
              display block
            .bg_img
              position relative
              height 50px
              text-align center
              background-image url("./bg_img.png")
              background-repeat no-repeat
              border 1px solid #e2e2e2
              background-size 120px auto
              padding 50px 10px 10px
              img
                position absolute
                left 0
                top 0
                right 0
                max-width 90%
                text-align center
                margin 10px auto 0
            .name
              height 20px
              margin-top 5px
              text-align center
              color #333
              font-size 13px
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
            .address
              height 20px
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
              text-align center
              font-size 12px
              color #999




</style>

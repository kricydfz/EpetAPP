<template>
    <div>
      <div class="index-content">
        <!--左边菜单列表区-->
        <div class="menu-list">

          <ul v-if="menuL">
            <li v-for="(menu,index) in menuL.categorys" :key="index"
                :dataid="menu.cateid" @click="changeList(index)"
                :class="{'active':currentIndex===index}">
              {{menu.name}}</li>
          </ul>
        </div>
        <!--右边菜单内容区-->
        <div class="main_right" ref="rightWrap">
          <div class="right_c">
            <div class="sortWrap" v-for="(sortL,index) in pet.cate_list" :key="index">
              <div class="sortT" v-if="sortL['type']==0">
                <div class="hot">

                  <span>{{sortL.title}}</span>
                  <a href="https://wap.epet.com/goodslist.html?extend_pam=cateid:6&fw=0">
                    <img src="./1.png" alt="">
                  </a>

                </div>
                <ul v-if="sortL.list">
                  <li v-for="(pic,index) in sortL.list" :key="index">
                    <a href="#">
                      <img :src="pic['photo']">
                    </a>
                    <p>{{pic.name}}</p>
                  </li>

                </ul>
              </div>
              <div class="sortB" v-if="sortL['type']==2">
                <div class="hot">
                  <span>{{sortL.title}}</span>
                </div>
                <ul v-if="sortL.list">
                  <li v-for="(pic,index) in sortL.list" :key="index">
                    <a href="#">
                      <div class="bg_img">
                        <img :src="pic.logo" alt="" class="img_b">
                      </div>
                      <p>{{pic.name}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
   </div>
      </div>
    </div>
</template>
<script>
  import Vue from 'vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return {
        currentIndex: 0,
      }
  },
    mounted(){
      let obj={
        do:"getChildren",
        owner:"88888",
        pet_type:"dog",
    }
       this.$store.dispatch('requestPet',obj)
    /*this.$store.dispatch('requestPet',obj,()=>{
      this.$nextTick(()=>{
         new BScroll(this.$refs.rightWrap,{
          click:true,
          scrollY:true
        })
      })
    })*/
      setTimeout(()=>{
        let  rightScroll=new BScroll(this.$refs.rightWrap,{
          click:true,
          scrollY:true
        })
      },1000)

      //左侧滑动
      this.$store.dispatch('requestMenuL',()=>{
        this.$nextTick(()=>{
          this.muneScroll=new BScroll('.menu-list',{
            click:true,
            scrollY:true
          })
        })
      })
    },
    methods:{
      changeList(index){
         this.currentIndex=index
      let dataid=event.target.getAttribute("dataid")
       let obj={
          do:"getChildren",
          owner:dataid,
          pet_type:"dog",
         }
        this.$store.dispatch('requestPet',obj)

      }
    },
    computed:{
      ...mapState(['menuL','pet']),

    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .index-content

    width 100%
    margin-top 43px
    overflow hidden
    .menu-list
      position fixed
      top 40px
      left 0
      padding-bottom 66px
      width 70px
      height 561px
      overflow hidden
      ul
        width 100%
        li
          width 70px
          height 50px
          padding 15px 0
          text-align center
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
          border-bottom 1px solid #f3f4f5




    & .main_right
      margin-left 75px
      width 300px
      position absolute
      top 40px
      bottom 66px
      left 0
      overflow hidden

      .sortT
        width 100%
        border-top 1px solid #f3f4f5
        padding 15px 5px 20px
        .hot
          text-align center
          width 100%
          height 20px
          margin-top 10px
          padding-left 5px
          span
            float left
          img
            height 10px
            margin-top 5px
            float right
        ul
          width 100%
          overflow hidden
          li
            float left
            width 81px
            height 105px
            margin 5px 0 0 10px
            text-align center
            img
              width 100%

      .sortB
        width 100%
        border-top 1px solid #f3f4f5
        padding 15px 5px 20px
        .hot
          width 100%
          height 20px
          margin-top 10px
          padding-left 5px
        ul
          width 100%
          overflow hidden
          li
            float left
            width 50%!important
            height 105px
            margin-top 10px
            text-align center
            position relative
            padding 0 5px
            .bg_img
              position relative
              overflow hidden
              text-align center
              background-image url("./bg_img.png")
              background-repeat no-repeat
              border 1px solid #f3f4f5
              background-size 120px auto
              padding 50px 10px 10px
              img
                position absolute
                left 0
                top 0
                right 0
                max-width 100%
                height 45px
                text-align center
                margin 10px auto 0
            p
              display block
              height 20px
              margin-top 5px
              text-align center
              color #333
              font-size 12px
              white-space nowrap
              text-overflow ellipsis
              overflow hidden

  .active
    background #f3f4f5
    color #ed4044
</style>

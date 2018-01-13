<template>
    <div>
      <router-view />
      <div class="footGuide">
        <ul class="foot_item">
          <li @click.stop="refreshIndex()">
            <span v-if="$route.path.indexOf('home') !== -1">
               <svgImage className="icon" type="#icon-shouye1-copy"></svgImage>
            </span>
            <span v-else>
              <svgImage className="icon" type="#icon-shouye1"></svgImage>
            </span>
            <br>
            <span>首页</span>

          </li>
          <li @click.stop="gotoAddress('/type')">
            <span v-if="$route.path.indexOf('type') !== -1">
                <svgImage className="icon_style" type="#icon-icon1-copy"/>
            </span>
            <span v-else>
              <svgImage className="icon" type="#icon-icon"></svgImage>
            </span>
            <br>
            <span>分类</span>
          </li>
          <li @click.stop="gotoAddress('/shopCart')">
            <span v-if="$route.path.indexOf('shopCart') !== -1">
                <svgImage className="icon_style" type="#icon-gouwuche2-copy"/>
            </span>
            <span v-else>
               <svgImage className="icon" type="#icon-gouwuche1"></svgImage>
            </span>
            <br>
            <span>购物车</span>
          </li>

          <li @click.stop="gotoAddress('/myPet')">
            <span v-if="$route.path.indexOf('/myPet') !== -1">
                <svgImage className="icon_style" type="#icon-wodedangxuan1-copy"/>
            </span>
            <span v-else>
               <svgImage className="icon" type="#icon-wodedangxuan"></svgImage>
            </span>
            <br>
            <span>我的E宠</span>
          </li>

        </ul>
       </div>

    </div>
</template>
<script>
  export default{
    methods:{
      refreshIndex(){
        console.log(this.$route)
        if (this.$route.path === '/home') {
          window.location = '/'//如果在当前路由点，就实现刷新效果
        } else {
          this.$router.replace('/home')//不是当前路由点，则切换到当前路由
        }
      },
      gotoAddress(path) {
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.footGuide
  z-index 1
  position fixed
  left 0
  bottom 0
  /*height 45px*/
  .foot_item
    width 100%
    height 100%
    &>li
      padding 10px 20px
      float left
      text-align center
      &>span
        &>.icon
          width 30px
          height 30px
        &>.icon_style
          width 30px
          height 30px
   /* a
      display block*/

</style>

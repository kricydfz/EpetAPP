<template>
  <div class="own_container">
        <div class="own_head">
          <a href="resgister_before.html">
          <i class="head_img_1"></i>
          </a>
          <i class="head_img_2"></i>
          <div class="head_content clearfix">
            <div class="head_content_div1 f_l">
              <img src="../../images/8.jpg">
            </div>
            <div class="head_content_div2 f_l">
              <p>kricy</p>
              <span>VIP俱乐部
                 <img class="img" src="../../images/v0.png" alt="">
               </span>
              <i class="ead_content_div2_img"></i>
            </div>
          </div>
        </div>
        <!--用户服务组件-->
        <div class="own_pagelist">
          <ul class="f_l clearfix">
            <li>
              <a href="#">
                <img src="../../images/not_pay.png" alt=""><br>
                <span>待付款</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../../images/not_get.png" alt=""><br>
                <span>待收货</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../../images/not_discount.png" alt=""><br>
                <span>待评价</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../../images/all_order.png" alt=""><br>
                <span>全部订单</span>
              </a>
            </li>
          </ul>
        </div>
        <!--服务组件2-->
        <div class="own_pagelist">
          <ul class="f_l clearfix">
            <li>
              <a href="#">
                <span>10</span><br>
                <span>待付款</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>0</span><br>
                <span>待收货</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>0.00</span><br>
                <span>待评价</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../../images/bullde_inco.png" alt=""><br>
                <span>全部订单</span>
              </a>
            </li>
          </ul>
        </div>
        <!--list组件群体-->
        <div class="taobao_order">
          <img src="../../images/vip_icon.png" alt=""><span>VIP俱乐部</span>
        </div>
        <div class="taobao_order">
          <img src="../../images/E_icon.png" alt=""><span>我的E宠团</span>
        </div>
        <div class="taobao_order">
          <img src="../../images/discount_icon.png" alt=""><span>我的评价</span>
        </div>
        <div class="taobao_order">
          <img src="../../images/zixun_icon.png" alt=""><span>我的咨询</span>
        </div>
        <div class="taobao_order">
          <img src="../../images/shoujie_icon.png" alt=""><span>我的收藏</span>
        </div>
        <!--补白-->
        <div class="while"></div>
       <!-- <div class="footer_wrap clearfix">
          <div class="footer">
            <div><a href="index.html"><img src="../../images/index_0.png" alt=""><br>主页</a></div>
            <div><a href="category.html"><img src="../../images/Category_0.png" alt=""><br>分类</a></div>
            <div><a href="cart.html"><img src="../../images/cart_0.png" alt=""><br>购物车</a></div>
            <div><a class="current" href="../../owm.html"><img src="images/account%20_1.png" alt=""><br>我的</a></div>
          </div>
        </div>-->
      </div>

</template>
<script>
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .own_container
    width 100%
    position relative
    background #F3F4F5
    .own_head
      width 100%
      height 167px
      position relative
      background-image url("../../images/bg.jpg")
      background-repeat no-repeat
      background-size cover
      & .head_img_1
        position absolute
        top 31px
        right 62px
        width 22px
        height 22px
        background-image url("../../images/setting.png")
        background-repeat no-repeat
        background-size cover
      .head_img_2
        position absolute
        top 31px
        right 27px
        width 22px
        height 22px
        background-image url(../../images/newn.png)
        background-repeat no-repeat
        background-size cover
      &>.head_content
        width 280px
        height 80px
        position absolute;
        top 62px
        left 15px
        .head_content_div1
          float left
          width 78px
          float left
          img
            width:75px
            height: auto
            border-radius: 50%
        .head_content_div2
          float left
          width 100px
          height 51px
          font-size 17px
          p
            color #ffffff
          span
            display inline-block
            margin-top 15px
            background salmon
            text-align center
            line-height  25px
            width 100px
            height  25px
            border-radius  20px
            color #FFFFFF
            font-size 15px
            img
              width 15px
              height 15px
              display inline-block
          .ead_content_div2_img
            position  absolute;
            top 22px
            right 6px
            width 87px
            height 30px
            background-image url(../../images/plus6.png)
            background-repeat no-repeat
            background-size cover

    .own_pagelist
      width 100%
      height 89px
      margin-top 10px
      background #FFFFFF;
      ul
        width 100%
        height 77px
        display flex
        text-align center
        float left
        li
          margin-top:15px
          float left
          flex 1
          img
            width 28px
            height 25px
            display inline-block
    .taobao_order
      width 100%
      height 57px
      background #FFFFFF
      margin-top 10px
      position relative
      img
        width 20px
        margin-left 10px
        margin-top 20px
      span
        position absolute
        left 42px
        top 22px
        font-size 15px

    /*.white
      height 68px*/
</style>

<template>
  <div class="mt-swipe">

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
  </div>

</template>
<script>
  export default{
  methods:{
    handleChange(){

    }
  }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.mt-swipe
  width 100%
  height 160px
  /*&>mt-swipe-item
    height 100%
    &>img
      display block
      width 100%
      !*height 100%*!*/
  img
    display block
    width 100%

</style>

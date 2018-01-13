<template>
  <div class="mt-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.image" alt="">
      </mt-swipe-item>

    </mt-swipe>
  </div>

</template>
<script>
  export default{
    props:['imgs'],
  methods:{

  }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .mt-swipe
    width 100%
    height 160px
    img
      display block
      width 100%

</style>

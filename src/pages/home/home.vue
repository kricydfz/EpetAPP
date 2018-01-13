<template>
  <div>
     <header1 />

       <main1/>
  </div>
</template>
<script>
  import header from '../../components/header/header.vue'
  import main from '../../components/main/main.vue'
  export default{
    components:{
      header1:header,
      main1:main
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .switc_type
    width 100%
    height 500px
    .go_dog
      background-image url("./godog.png")
      background-repeat no-repeat
      background-size 80px auto
      width 41px
      height 46px
      position fixed
      right -1px
      bottom 15%
      z-index 2

</style>

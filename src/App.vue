<template>
    <div>
      <header1 />
      <search />
      <content1 />
      <carousel />
      <foot-guide />



    </div>
</template>
<script>
  import header from './components/header/header.vue'
  import search from './components/search/search.vue'
  import content from './components/content/content.vue'
  import footGuide from './components/footGuide/footGuide.vue'
  import carousel from './components/carousel/carousel.vue'
  export default{
    components:{
      header1:header,
      search,
      content1:content,
      footGuide,
      carousel
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>

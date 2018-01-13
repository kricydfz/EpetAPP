<template>
  <div class="imgWrap" v-if="home">
     <!--{{home}}-->
    <div class="imgList" v-for="(pic, index) in pics" :key="index">
      <a :href="pic['content_images'][0][0].target.param">
        <img :src="pic['content_images'][0][0].image" alt=""></a>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      home:Object
    },

    computed:{
      pics(){
        let picsArr=[]
        picsArr=this.home.datas.filter((index)=>{
          return index>=17 && index <=37 && index%2==1  //[]
        })
        return picsArr
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .imgWrap
    width 100%
    .imgList
      width 100%
      height 160px
      &>a
        display block
        &>img
          width 100%



</style>

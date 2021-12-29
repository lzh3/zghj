<template>
  <div class="video-page">
    <div class="title-bar">第一节 舰艇常用电工仪表及测量</div>
    <!-- <video preload width="100%" height="240" controls>
      <source src="./source/first/01.mp4" type="video/mp4" />
      <object data="./source/first/01.mp4">
        <embed src="./source/first/01.mp4" width="320" height="240" />
      </object>
    </video> -->
  </div>
</template>
<script>
export default {
  name: "SubjectDetail",
  watch: {
      $route: {
          handler(route){
              console.log('route===', route)
          }
      }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created(){
    //   console.log('created=========')
  },
};
</script>
<style scoped>
.video-page{
    height: auto;
}
.title-bar{
    height: 30px;
    line-height: 30px;
    margin-bottom: 15px;
    padding-left: 16px;
    font-size: 16px;
    font-weight: 550;
    letter-spacing: 3px;
    border-left: 3px solid #7952b3;
    cursor: pointer;
}
</style>

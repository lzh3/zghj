<template>
  <div class="block">
      <el-carousel trigger="click" height="450px">
        <el-carousel-item v-for="(item, index) in imgs" :key="index">
          <img class="picture" :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
import img1 from '@/assets/imgs/home01.jpg'
import img2 from '@/assets/imgs/home02.jpg'
import img3 from '@/assets/imgs/home03.jpg'
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      imgs: [
        {
          url: img1,
        },
        {
          url: img2,
        },
        {
          url: img3,
        },
      ],
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* home */
.block{
  height: 100%;
}
.picture{
  width: 100%;
  height: auto;
}
</style>

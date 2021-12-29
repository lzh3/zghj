<template>
  <div class="video-page">
    <div class="title-bar">{{title}}</div>
    <div class="video-content">
      <video preload width="70%" height="240" controls  ref="videoDom" >
        <source :src="videoSrc" type="video/mp4"/>
        <object :data="videoSrc">
          <embed :src="videoSrc" width="320" height="240" />
        </object>
      </video> 
      <!-- <video id="myVideo" class="video-js">
        <source :src="videoSrc" type="video/mp4">
      </video>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "SubjectDetail",
  watch: {
    $route: {
      handler(route) {
        let pre = "@/assets/source/";
        const { title, section, p, count } = route.query;
        this.title = title;
        // this.videoSrc = pre+section+"/"+p+".mp4";
        let videoSrc = pre+section+"/"+p+".mp4";

        console.log('route===src', videoSrc)

        this.videoSrc = videoSrc

        // console.log('route===', route)
        // this.$forceUpdate()
      }
    }
  },
  computed:{

  },
  data() {
    return {
      videoContent: "",
      videoSrc: "@/assets/source/second/01.mp4",
      title: "",

    };
  },
  methods: {

  },
};
</script>
<style scoped>
.video-page {
  height: auto;
}
.title-bar {
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

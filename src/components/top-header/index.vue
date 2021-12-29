<template>
  <div class="header-box">
    <img class="logo-pic" src="../../assets/imgs/logo.png" alt="" />
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/subject">教学展示</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({
          path: key
      })
    }
  }
};
</script>
<style scoped>
.header-box {
  display: flex;
}

.logo-pic {
  width: 162px;
  height: 60px;
}
</style>

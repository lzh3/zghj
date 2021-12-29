<template>
  <div id="app">
    <el-container>
      <el-container>
        <el-header>
          <top-header></top-header>
        </el-header>

        <router-view />
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>

    </el-container>
  </div>
</template>

<script>
import TopHeader from "@/components/top-header"
export default {
  name: "App",
  components: {
    TopHeader
  }
};
</script>

<style>
body {
  margin: 0;
  height: 100vh;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  height: 100%;
}
.el-header, .el-footer {
    background-color: #fff !important;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header{
    margin-bottom: 1px;
    box-shadow: 0 0 0 3px #bbb !important;
    /* border-bottom: 2px solid red; */
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
    /* text-indent: 30px; */
  }

  .el-submenu .el-submenu__title {
    padding-left: 40px !important;
  }
  
  .second-menu  .el-submenu__title{
    padding-left: 50px !important;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left !important;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<template>
  <el-row class="tac">
    <el-col :span="24">
      <!-- <h5>默认颜色</h5> -->
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <el-menu default-active="1" 
        class="el-menu-vertical-demo"
        :unique-opened="true"
       @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <!-- <span>{{item.title}}</span> -->
            <span>第一部分</span>
          </template>


          <el-submenu class="second-menu" v-for="(item, index) in subjectMenu" :key="index" :index="'1-'+index">
            <template slot="title">{{item.title}}</template>
            <el-menu-item v-for="(v, idx) in item.child" :key="idx" :index="'1-'+v.params" @click="handleMenuItemClick(v, item.section, item.type)">{{v.title}}</el-menu-item>
          </el-submenu>

        </el-submenu>

        
        
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
import {subjectMenu} from "../../utils/subjectMenu"
export default {
  data() {
    return {
      isCollapse: false,
      subjectMenu,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 点击菜单项 type: 第几部分  section 第几节
    handleMenuItemClick(item, section, type){
      console.log(item, section)
      this.$router.push({
        path: "/subject/detail",
        query: {
          count: item.count||'',
          section,
          p: item.params,
          title: item.title,
        }
      })
    }
  }
}
</script>
<style scoped>
.el-row {
    width: 380px;
    height: 100vh;
    line-height: 0;
    background: #fff;
}

  .el-submenu .el-menu{
    padding-left: 30px;
  }
  .el-submenu__title > span{
    font-weight: 600;
  }
  
</style>
<template>
  <el-row class="tac">
    <el-col :span="24">
      <!-- <h5>默认颜色</h5> -->
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu default-active="2" 
        class="el-menu-vertical-demo"
        :unique-opened="true"
        :router="true"
       @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>第一章</span>
          </template>
          <el-submenu index="1-1">
            <template slot="title">选项4</template>
            <el-menu-item index="1-1-1">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">选项4</template>
            <el-menu-item index="1-2-1">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="1-3">
            <template slot="title">选项4</template>
            <el-menu-item index="1-3-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航二</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
.el-row {
    width: 380px;
    line-height: 0;
}
</style>
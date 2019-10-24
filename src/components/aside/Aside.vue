<template>
  <div id="aside">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        ><el-menu-item index="1" @click="jump('/homepage')">
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2" @click="jump('/table')">
          <i class="el-icon-menu"></i>
          <span slot="title">分页表格</span>
        </el-menu-item>
        <el-menu-item index="3" @click="jump('/label')">
          <i class="el-icon-document"></i>
          <span slot="title">标签页</span>
        </el-menu-item>
        <el-menu-item index="4" @click="jump('/upload')">
          <i class="el-icon-upload"></i>
          <span slot="title">图片上传</span>
        </el-menu-item>
        <el-menu-item index="5" @click="jump('/published')">
          <i class="el-icon-sell"></i>
          <span slot="title">已发表</span>
        </el-menu-item>
        <el-menu-item index="6" @click="jump('/articles')">
          <i class="el-icon-message"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="7" @click="jump('/statistical')">
          <i class="el-icon-pie-chart"></i>
          <span slot="title">统计</span>
        </el-menu-item>
        <el-menu-item index="8" @click="jump('/excel')">
          <i class="el-icon-printer"></i>
          <span slot="title">导出excel</span>
        </el-menu-item>
        <el-menu-item index="9" @click="jump('/quit')">
          <i class="el-icon-delete"></i>
          <span slot="title">退出系统</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "Aside",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    jump(path) {
      this.$router.push(path);
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#aside {
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: #545c64;
  .el-menu {
    border: 0;
  }
}
</style>

<template>
  <div>
    <el-container>
      <el-header><Top></Top></el-header>
      <el-container>
        <el-aside width="200px"><Aside></Aside></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Top from "../../components/top/Top";
import Aside from "../../components/aside/Aside";
export default {
  name: "Comment",
  components: {
    Top,
    Aside
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss"></style>

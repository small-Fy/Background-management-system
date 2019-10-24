<template>
  <div id="top">
    <div class="left">
      <span>欢迎</span>
      <span>Lp</span>
      <span>来到小爱后台管理系统</span>
    </div>
    <div class="right">
      <span>早上好</span>
      <span>亲爱的</span>
      <span>lp</span>
      <span>上次登录时间</span>
      <span>上次登录时间</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  components: {},
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

<style scoped lang="scss">
#top{
  display: flex;
  background-color: #2e5e85;
  justify-content: space-between;
  height: 60px;
  width: 96%;
  font-size: 16px;
  padding: 0 2%;
  line-height: 60px;
  color: white;
  z-index: 100;
}
</style>

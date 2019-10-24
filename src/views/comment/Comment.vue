<template>
  <div id="all">
    <Top class="top"></Top>
    <Aside class="aside"></Aside>
    <router-view class="main"></router-view>
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

<style scoped lang="scss">
#all{
  position: relative;
  display: flex;
  .top{
    position: fixed;
  }
  .aside{
    margin-top: 60px;
    width: 12.5%;
  }
  .main{
    margin-top: 60px;
    width: 87.5%;
    margin-left: 12.5%;
    background-color: grey;
  }
}
</style>

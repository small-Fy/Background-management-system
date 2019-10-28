<template>
  <div id="Quit">
    <div class="text">期待你的下次光临</div>
    <div class="button">
      <el-button type="primary" @click="quit">确定退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quit",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    quit(){
      localStorage.clear()
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
#Quit {
  padding: 2% 2%;
  position: relative;
  .text {
    text-align: center;
    margin-top: 200px;
    font-size: 25px;
    font-weight: bold;
  }
  .button{
    position: absolute;
    left: 50%;
    margin-top: 10px;
    margin-left: -40px;
  }
}
</style>

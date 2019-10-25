<template>
  <div id="census">
    <div class="pic">
      <img
        src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
        alt=""
      />
    </div>
    <div class="bar">
      <div v-for="(item,index) in census" :key="index">
        <div class="name">{{item.name}}</div>
        <div v-if="item.progress === 1" class="name">
          <el-progress :percentage=item.progress*100 status="success"></el-progress>
        </div>
        <div class="name" v-else>
          <el-progress :percentage=item.progress*100></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Census",
  components: {
  },
  props: {},
  data() {
    return {
      census: []
    };
  },
  methods: {
    getCensus() {
      this.$axios
        .req("api/progress")
        .then(res => {
          this.census = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCensus();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#census {
  background-color: white;
  width: 24%;
  margin-left: 1%;
  .pic {
    img {
      padding: 3%;
      width: 94%;
    }
  }
  .bar{
    margin-top: 5px;
    padding: 3%;
    .name{
      margin-bottom: 10px;
    }
  }
}
</style>

<template>
  <div id="pie">
    <br>
    <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
  </div>
</template>

<script>
import VePie from "v-charts/lib/pie";
export default {
  name: "Pie",
  components: {
    VePie
  },
  props: {},
  data() {
    this.chartSettings = {
      roseType: 'radius'
    }
    return {
      chartData: {
        columns: ["name", "data"],
        rows: []
      },
      pie:[]
    };
  },
  methods: {
    getPie() {
      this.$axios
          .req("api/ringChat")
          .then(res => {
            this.pie = res.data;
            this.chartData.rows = this.pie;
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
    }
  },
  mounted() {
    this.getPie();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
  #pie {
    width: 33%;
    border-radius: 5px;
    background-color: white;
  }
</style>

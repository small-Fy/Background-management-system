<template>
  <div id="chart">
    <br>
    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
  </div>
</template>

<script>
import VeLine from "v-charts/lib/line";
export default {
  name: "Chart",
  components: {
    VeLine
  },
  props: {},
  data() {
    this.chartSettings = {
      metrics: ["expected", "actual"],
      dimension: ["date"]
    };
    return {
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: []
      },
      chart: []
    };
  },
  methods: {
    getChart() {
      this.$axios
        .req("api/homeChat")
        .then(res => {
          this.chart = res.data;
          this.chartData.rows = this.chart;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getChart();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#chart {
  margin-top: 50px;
  background-color: white;
}
</style>

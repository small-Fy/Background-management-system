<template>
  <div id="graph">
    <br>
    <ve-radar :data="chartData"></ve-radar>
  </div>
</template>

<script>
import VeRadar from "v-charts/lib/radar";
export default {
  name: "Graph",
  components: {
    VeRadar
  },
  props: {},
  data() {
    return {
      chartData: {
        columns: [
          "name",
          "sales",
          "ministration",
          "techology",
          "delelopmer",
          "marketing"
        ],
        rows: []
      },
      graph: []
    };
  },
  methods: {
    getGraph() {
      this.$axios
        .req("api/radarChat")
        .then(res => {
          this.graph = res.data;
          this.chartData.rows = this.graph;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getGraph();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#graph {
  width: 33%;
  border-radius: 5px;
  background-color: white;
}
</style>

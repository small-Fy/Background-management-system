<template>
  <div id="histogram">
    <br>
    <ve-histogram :data="chartData"></ve-histogram>
  </div>
</template>

<script>
import VeHistogram from "v-charts/lib/histogram";
export default {
  name: "Histogram",
  components: {
    VeHistogram
  },
  props: {},
  data() {
    return {
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: []
      },
      histogram: []
    };
  },
  methods: {
    getHistogram() {
      this.$axios
        .req("api/homeChat")
        .then(res => {
          this.histogram = res.data;
          this.chartData.rows = this.histogram;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getHistogram();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#histogram {
  width: 33%;
  border-radius: 5px;
  background-color: white;
}
</style>

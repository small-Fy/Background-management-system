<template>
  <div id="waterfall">
    Waterfall
    <ve-waterfall :data="chartData"></ve-waterfall>
  </div>
</template>

<script>
import VeWaterfall from "v-charts/lib/waterfall";
export default {
  name: "Waterfall",
  components: {
    VeWaterfall
  },
  props: {},
  data() {
    return {
      chartData: {
        columns: ["name", "data"],
        rows: []
      },
      waterfall: [],
      obj: {}
    };
  },
  methods: {
    getWaterfall() {
      this.$axios
        .req("api/article/allArticle")
        .then(res => {
          this.waterfall = res.data;
          this.waterfall.map(item => {
            item.date = this.$dayjs(item.date).format("YYYY-MM-DD HH:mm:ss");
          });

          this.obj = this.$lodash.groupBy(this.waterfall, "date");
          for (let x in this.obj) {
            this.chartData.rows.push({ name: x, data: this.obj[x].length });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getWaterfall();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss"></style>

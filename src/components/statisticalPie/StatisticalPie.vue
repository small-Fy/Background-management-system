<template>
  <div class="statisticalPie">
    <ve-pie :data="chartData"  :settings="chartSettings"></ve-pie>
  </div>
</template>

<script>
import VePie from "v-charts/lib/pie";
export default {
  name: "StatisticalPie",
  components: {
    VePie
  },
  props: {},
  data() {
    this.chartSettings = {
      dimension: 'name',
      metrics: 'data'
    }
    return {
      chartData: {
        columns: ["name", "data"],
        rows: []
      },
      pie:[],
      obj:{}
    };
  },
  methods: {
    getPie() {
      this.$axios
        .req("api/article/allArticle")
        .then(res => {
          this.pie = res.data;
          this.obj = this.$lodash.groupBy(this.pie, "category");
          for(let x in this.obj){
            this.chartData.rows.push({"name":x,"data":this.obj[x].length})
          }
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

<style scoped lang="scss"></style>

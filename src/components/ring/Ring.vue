<template>
  <div id="ring">
    <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
  </div>
</template>

<script>
import VeRing from "v-charts/lib/ring";
export default {
  name: "Ring",
  components: {
    VeRing
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
      ring:[],
      obj:{}
    };
  },
  methods: {
    getRing() {
      this.$axios
        .req("api/article/allArticle")
        .then(res => {
          this.ring = res.data;
          this.obj = this.$lodash.groupBy(this.ring, "source");
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
    this.getRing();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss"></style>

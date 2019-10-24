<template>
  <div id="homepage">
    <Messages></Messages>
    <Chart></Chart>
    <div class="chart">
      <Graph></Graph>
      <Pie></Pie>
      <Histogram></Histogram>
    </div>
    <div class="bottom">
      <Order></Order>
      <Census></Census>
    </div>
  </div>
</template>

<script>
import Messages from "../../components/messages/Messages";
import Chart from "../../components/chart/Chart";
import Graph from "../../components/graph/Graph";
import Pie from "../../components/pie/Pie";
import Histogram from "../../components/histogram/Histogram";
import Order from "../../components/order/Order";
import Census from "../../components/census/Census";
export default {
  name: "homepage",
  components: {
    Messages,
    Chart,
    Graph,
    Pie,
    Histogram,
    Order,
    Census
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {

  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#homepage {
  padding: 0 20px;
  .chart{
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }
  .bottom{
    display: flex;
    margin-top: 50px;
  }
}
</style>

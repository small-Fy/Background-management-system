<template>
  <div id="order">
    <el-table :data="data" style="width: 100%">
      <el-table-column prop="num" label="Order-No" width="380">
      </el-table-column>
      <el-table-column prop="price" label="Price" width="280">
      </el-table-column>
      <el-table-column prop="status" label="status" width="100">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.status === 0">success</el-tag>

          <el-tag type="danger" v-if="scope.row.status === 1" >pending</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Order",
  components: {},
  props: {},
  data() {
    return {
      data: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api/orderData")
        .then(res => {
          this.data = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#order {
  width: 66%;
  border-radius: 5px;
}
</style>

<template>
  <div id="table">
    <div class="panel-primary">
      <div class="panel-body">
        <label>
          <input
            type="text"
            class="form-control"
            v-model="keywords"
            placeholder="请输入你想搜索的商品名称"
          />
        </label>
      </div>
    </div>
    <el-table
        :data="data"
        border
        style="width: 100%">
      <el-table-column
          fixed
          prop="NAME"
          label="名称"
          width="300">
      </el-table-column>
      <el-table-column
          prop="GOODS_SERIAL_NUMBER"
          label="商品编号"
          width="300">
      </el-table-column>
      <el-table-column
          prop="ORI_PRICE"
          label="原价"
          width="300">
      </el-table-column>
      <el-table-column
          prop="PRESENT_PRICE"
          label="现价"
          width="300">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Table",
  components: {},
  props: {},
  data() {
    return {
      keywords: "",
      arr: [],
      data: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api/tableData")
        .then(res => {
          this.data = res.data;
          this.arr = this.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleClick(row) {
      console.log(row);
    }
  },
  mounted() {
    this.getData();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {
    keywords(val) {
      if (val.trim() !== "") {
        this.arr = this.data.filter(item => {
          return JSON.stringify(item.NAME).includes(val);
        });
      } else {
        this.arr = this.data;
      }
    }
  },
  directives: {}
};
</script>

<style scoped lang="scss">
#table {
  padding: 2% 2%;
  background-color: white;
  .panel-primary {
    .panel-body {
      input {
        width: 250px;
        height: 30px;
      }
    }
  }
  .el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
}
</style>

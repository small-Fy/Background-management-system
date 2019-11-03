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
    <div class="data">
      <table
        class="table table-bordered table-hover table-striped"
        v-if="arr.length > 0"
      >
        <thead>
          <tr>
            <th>名称</th>
            <th>商品编号</th>
            <th>原价</th>
            <th>现价</th>
            <th>操作</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item, index) in arr.slice(
              pagess * (pagesNumm - 1),
              pagesNumm * pagess
            )"
            :key="index"
          >
            <td class="one">{{ item.NAME }}</td>
            <td class="two">{{ item.GOODS_SERIAL_NUMBER }}</td>
            <td class="third">{{ item.ORI_PRICE }}</td>
            <td class="four">{{ item.PRESENT_PRICE }}</td>
            <td class="five">
              <span class="alter" @click="revise(item)"><i class="el-icon-edit"></i>修改</span>
              <span class="del" @click="del(index)"
                ><i class="el-icon-delete"></i>删除</span
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>暂无数据</div>
    </div>
    <Turnpage @pages="pages" @pagesNum="pagesNum" :arr="arr"></Turnpage>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="obj">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="obj.NAME" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="原价" :label-width="formLabelWidth">
          <el-input v-model="obj.ORI_PRICE" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="现价" :label-width="formLabelWidth">
          <el-input v-model="obj.PRESENT_PRICE" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Turnpage from "../../components/turnpage/Turnpage";
export default {
  name: "Table",
  components: {
    Turnpage
  },
  props: {},
  data() {
    return {
      keywords: "",
      arr: [],
      data: [],
      pagess: "",
      pagesNumm: "",
      dialogFormVisible: false,
      formLabelWidth: '120px',
      obj:{}
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
    pages(data) {
      this.pagess = data;
    },
    pagesNum(data) {
      this.pagesNumm = data;
    },
    del(index) {
      this.arr.splice(index, 1);
    },
    revise(item){
      this.obj=item
      this.dialogFormVisible=true
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
  .data {
    background-color: white;
    table {
      margin-top: 20px;
      color: gray;
      font-size: 16px;
      thead {
        tr {
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #ffecd8;
        }
      }
      tbody {
        tr {
          border-bottom: 1px solid #ffecd8;
        }
        .one {
          width: 24%;
          text-align: center;
        }
        .two {
          width: 20%;
          text-align: center;
        }
        .third {
          width: 20%;
          text-align: center;
        }
        .four {
          width: 20%;
          text-align: center;
        }
        .five {
          width: 16%;
          text-align: center;
        }
        td {
          .alter {
            width: 100px;
            height: 40px;
            line-height: 40px;
            background-color: #6457ff;
            border-radius: 6px;
            color: white;
          }
          .del {
            margin-left: 10px;
            background-color: #ff5d67;
            border-radius: 6px;
            color: white;
          }
        }
      }
    }
  }
}
</style>

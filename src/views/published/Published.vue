<template>
  <div id="published">
    <el-table :data="data" style="width: 100%" border stripe>
      <el-table-column label="#" width="40" align="center" type="index">
      </el-table-column>
      <el-table-column label="标题" width="300" prop="title" align="center">
      </el-table-column>
      <el-table-column label="作者" width="100" prop="author" align="center">
      </el-table-column>
      <el-table-column label="类目" width="120" prop="category" align="center"
        ><template slot-scope="scope">
          <div v-if="scope.row.category === 'Vue'">
            <el-tag disable-transitions type="info">{{
              scope.row.category
            }}</el-tag>
          </div>
          <div v-if="scope.row.category === 'react'">
            <el-tag disable-transitions type="warning">{{
              scope.row.category
            }}</el-tag>
          </div>
          <div v-if="scope.row.category === 'Node.js'">
            <el-tag disable-transitions type="danger">{{
              scope.row.category
            }}</el-tag>
          </div>
          <div v-if="scope.row.category === '性能优化'">
            <el-tag disable-transitions type="success">{{
              scope.row.category
            }}</el-tag>
          </div>
          <div v-if="scope.row.category === 'javeCript'">
            <el-tag disable-transitions type="info">{{
              scope.row.category
            }}</el-tag>
          </div>
          <div v-if="scope.row.category === '小程序'">
            <el-tag disable-transitions type="danger">{{
              scope.row.category
            }}</el-tag>
          </div>
          <div v-if="scope.row.category === '工具类'">
            <el-tag disable-transitions type="success">{{
              scope.row.category
            }}</el-tag>
          </div>
          <div v-if="scope.row.category === '其它'">
            <el-tag disable-transitions>{{ scope.row.category }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="来源" width="100" prop="source" align="center">
      </el-table-column>
      <el-table-column label="重要性" width="150" prop="star" align="center">
        <template slot-scope="scope">
          <el-rate v-model="scope.row.star"></el-rate>
        </template>
      </el-table-column>
      <el-table-column label="发布时间" width="130" align="center">
        <template slot-scope="scope">
          <div>
            {{ $dayjs(scope.row.date).format("YYYY年MM月DD日HH时mm分ss秒") }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
          <el-button
            size="mini"
            type="success"
            @click="handleView(scope.row)"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Published",
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
        .req("api/article/allArticle")
        .then(res => {
          this.data = res.data;
          this.data.map(item=>{
            item.star=Number(item.star)
          })
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(row) {
      this.$router.push({ name: "edit", query: { _id: row._id } });
    },
    handleDelete(row) {
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.$axios
            .req("api/article/delete", {
              _id: row._id
            })
            .then(res => {
              if (res.code === 200) {
                // this.$router.push("/published");
                history.go(0);
              } else {
                this.$message.error("删除失败");
                return false;
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleView(row) {
      this.$router.push({ name: "look", query: { _id: row._id } });
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
#published {
  padding: 2%;
}
</style>

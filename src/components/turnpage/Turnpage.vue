<template>
  <div id="turnpage">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="40"
      layout="total, sizes, prev, pager, next, jumper"
      :total="arr.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Turnpage",
  components: {},
  props: {
    arr: {
      type: Array,
      defaulte: () => []
    }
  },
  data() {
    return {
      currentPage: 1,
      pages: 40,
      pagesNum: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pages = val;
      this.$emit("pages", this.pages);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pagesNum = val;
      this.$emit("pagesNum", this.pagesNum);
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    this.$emit("pages", this.pages);
    this.$emit("pagesNum", this.pagesNum);
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#turnpage {
  margin-top: 20px;
}
</style>

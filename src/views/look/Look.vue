<template>
  <div id="look">
    <div class="top">
      <el-button type="primary" @click="back">返回</el-button>
    </div>
    <div class="word">
      <div class="title">{{ ruleForm.title }}</div>
      <div class="abstract">摘要：{{ ruleForm.abstract }}</div>
      <div class="date">发布于：{{ date }}</div>
    </div>
    <div class="inner">
      <mavon-editor v-model="ruleForm.text" :editable="false" :toolbarsFlag="false" :subfield="false" defaultOpen="preview"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Look",
  components: {},
  props: {},
  data() {
    return {
      id: "",
      date: "",
      ruleForm: {}
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("/api/article/article", { _id: this.id })
        .then(res => {
          this.ruleForm = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    format() {
      this.date = this.$dayjs(this.ruleForm.date).format("YYYY-MM-DD HH:mm:ss");
    },
    back(){
      this.$router.push("/published")
    }
  },
  mounted() {
    this.id = this.$route.query._id;
    this.getData();
    this.format();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#look {
  padding: 2%;
  .top {
    width: 60px;
    height: 40px;
  }
  .word {
    text-align: center;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .abstract {
      margin-top: 30px;
    }
    .date {
      font-size: 8px;
      color: gray;
      margin-top: 5px;
    }
  }
  .inner{
    background-color: white;
  }
}
</style>

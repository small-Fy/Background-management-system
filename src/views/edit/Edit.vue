<template>
  <div id="edit">
    <div class="top">
      <el-button type="danger" @click="back">返回</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
    </div>
    <div class="topic">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章标题" prop="title" required>
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract" required>
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>
        <div style="display: flex">
          <div>
            <el-form-item label="作者" prop="author" required>
              <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="类目" prop="category" required>
              <el-select v-model="ruleForm.category" placeholder="请选择">
                <el-option label="Vue" value="Vue"></el-option>
                <el-option label="react" value="react"></el-option>
                <el-option label="Node.js" value="Node"></el-option>
                <el-option label="性能优化" value="性能优化"></el-option>
                <el-option label="javeCript" value="javeCript"></el-option>
                <el-option label="小程序" value="小程序"></el-option>
                <el-option label="工具类" value="工具类"></el-option>
                <el-option label="其它" value="其它"></el-option>
              </el-select>
            </el-form-item>
          </div>

          <div>
            <el-form-item label="来源" prop="source" required>
              <el-select v-model="ruleForm.source" placeholder="请选择">
                <el-option label="原创" value="原创"></el-option>
                <el-option label="转载" value="转载"></el-option>
                <el-option label="与他人合作" value="与他人合作"></el-option>
              </el-select>
            </el-form-item>
          </div>

          <div>
            <el-form-item label="重要性" prop="star" required>
              <el-select v-model="ruleForm.star" placeholder="请选择">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
                <el-option label="3" value="3"></el-option>
                <el-option label="4" value="4"></el-option>
                <el-option label="5" value="5"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="发布时间">
              <el-date-picker
                v-model="ruleForm.date"
                type="datetime"
                placeholder="选择日期时间"
                align="right"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </el-form-item>
          </div>
        </div>
        <div class="release">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >发布</el-button
            >
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="main">
      <mavon-editor v-model="ruleForm.text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
  components: {},
  props: {},
  data() {
    return {
      id: "",
      value: "",
      ruleForm: {},
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e6;
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
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
    submitForm(formName) {
      console.log(111);
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.ruleForm.date === "") {
            let nowTime = Date.now();
            this.ruleForm.date = this.$dayjs(nowTime).format(
              "YYYY-MM-DD HH:mm:ss"
            );
            console.log(this.ruleForm.date);
            this.$axios
              .req("/api/article/update", {
                id: this.id,
                title: this.ruleForm.title,
                abstract: this.ruleForm.abstract,
                author: this.ruleForm.author,
                category: this.ruleForm.category,
                source: this.ruleForm.source,
                star: this.ruleForm.star,
                text: this.ruleForm.text,
                date: this.ruleForm.date
              })
              .then(res => {
                console.log(this.ruleForm.date);
                if (res.success) {
                  this.$message({
                    message: "编辑成功",
                    type: "success"
                  });
                  this.$router.push("/publish");
                  console.log(res);
                }
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            this.$axios
              .req("/api/article/update", {
                id: this.id,
                title: this.ruleForm.title,
                abstract: this.ruleForm.abstract,
                author: this.ruleForm.author,
                category: this.ruleForm.category,
                source: this.ruleForm.source,
                star: this.ruleForm.star,
                text: this.value,
                date: this.ruleForm.date
              })
              .then(res => {
                console.log(res.code);
                console.log(this.ruleForm.date);
                if (res.success) {
                  this.$message({
                    message: "发布成功",
                    type: "success"
                  });
                  this.$router.push("/homepage");
                } else {
                  this.$message.error("发布失败");
                }
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
          }
        }
      });
    },
    back(){
      this.$router.push("/published");
    }
  },
  mounted() {
    this.id = this.$route.query._id;
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
#edit {
  padding: 2%;
  height: 100%;
  position: relative;
  .top{
    display: flex;
    justify-content: space-around;
  }
  .topic {
    margin-top: 30px;
  }
  .main {
    margin-bottom: 50px;
  }
  .release {
    position: absolute;
    bottom: 0px;
    left: 40%;
  }
}
</style>

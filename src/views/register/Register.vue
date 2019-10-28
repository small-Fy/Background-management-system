<template>
  <div id="register">
    <div class="inner">
      <div class="top">
        欢迎来到小爱后台管理系统
      </div>
      <div class="bottom">
        <div class="form">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input
                type="text"
                v-model="ruleForm.username"
                onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即注册</el-button
              >
              <el-button type="primary" @click="login">立即登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {},
  props: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .req("api/user/register", {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            })
            .then(res => {
              console.log(res.code);
              if (res.code === 200) {
                this.$message({
                  message: "恭喜你，注册成功，将自动跳往首页",
                  type: "success"
                });
                this.$router.push("/homepage");
                console.log(this.ruleForm.username);
                console.log(this.ruleForm.password);
              } else {
                this.$message.error("哦豁，用户名已存在");
              }
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    login() {
      this.$router.push("/login");
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#register {
  border-radius: 100px;
  background-color: #f0f2f5;
  padding-top: 200px;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .inner {
    width: 600px;
    /*height: 400px;*/
    margin: 0 auto;
    background-color: white;
    .top {
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      border-bottom: 1px solid gray;
    }
    .bottom {
      margin-top: 30px;
      padding-bottom: 30px;
      .form {
        width: 550px;
        margin-left: 20px;
        .code {
          display: flex;
        }
        .el-button {
          margin-top: 20px;
          margin-right: 100px;
        }
      }
    }
  }
}
.el-input {
  width: 80%;
}
</style>

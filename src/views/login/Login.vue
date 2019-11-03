<template>
  <div id="login">
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
            label-width="110px"
            class="demo-ruleForm"
          >
            <el-form-item label="请输入用户名" prop="username">
              <el-input
                type="text"
                v-model="ruleForm.username"
                onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
              ></el-input>
            </el-form-item>
            <el-form-item label="请输入密码" prop="password">
              <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <div class="code">
              <div>
                <el-form-item label="请输入验证码" prop="code">
                  <el-input
                    type="password"
                    v-model="ruleForm.code"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
              <div v-html="code" @click="getCode"></div>
            </div>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即登录</el-button
              >
              <el-button type="primary" @click="register">立即注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
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
      code: "",
      ruleForm: {
        username: "",
        password: "",
        code: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
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
        ],
        code: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 4, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .req("api/user/login", {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              code: this.ruleForm.code
            })
            .then(res => {
              if (res.code === 200) {
                this.$message({
                  message: "恭喜你，登录成功，将自动跳往首页",
                  type: "success"
                });
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    name: this.ruleForm.username
                  })
                );
                localStorage.setItem(
                  "date",
                  JSON.stringify({
                    time: res.data[0].date
                  })
                );
                this.$store.state.username = this.ruleForm.username;
                this.$store.state.date = this.$dayjs(res.data[0].date)
                  .format("YYYY年MM月DD日HH:mm:ss")
                  .valueOf();
                this.$router.push("/homepage");
                console.log(this.$store.state.date);
              } else {
                this.$message.error("哦豁，密码或验证码错误");
                return false;
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    register() {
      this.$router.push("/register");
    },
    getCode() {
      this.$axios
        .req("api/captcha")
        .then(res => {
          this.code = res;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCode();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#login {
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

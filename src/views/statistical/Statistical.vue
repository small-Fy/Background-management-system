<template>
  <div id="statistical">
    <div class="top">
      <el-row>
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <div class="today">
              <i class="el-icon-check"></i>
              <div>今日发布</div>
              <div>1</div>
            </div>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="grid-content bg-purple-light">
            <div class="original">
              <i class="el-icon-tickets"></i>
              <div>原创文章</div>
              <div>5</div>
            </div>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <div class="message">
              <i class="el-icon-bell"></i>
              <div>新留言</div>
              <div>0</div>
            </div>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="grid-content bg-purple-light">
            <div class="news">
              <i class="el-icon-chat-dot-square"></i>
              <div>新消息</div>
              <div>0</div>
            </div>
          </div></el-col
        >
      </el-row>
    </div>
    <div class="pic">
      <div class="statisticalPie">
        <StatisticalPie></StatisticalPie>
      </div>
      <div class="ring">
        <Ring></Ring>
      </div>
    </div>
    <div class="waterfall">
      <Waterfall></Waterfall>
    </div>
  </div>
</template>

<script>
import StatisticalPie from "../../components/statisticalPie/StatisticalPie";
import Ring from "../../components/ring/Ring";
import Waterfall from "../../components/waterfall/Waterfall";
export default {
  name: "Statistical",
  components: {
    StatisticalPie,
    Ring,
    Waterfall
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#statistical {
  padding: 2%;
  .top {
    .el-col-6 {
      font-size: 18px;
      color: white;
      .today,
      .original,
      .message,
      .news {
        text-align: center;
        position: relative;
        padding: 15px 0;
        i {
          position: absolute;
          right: 30px;
          margin-top: 10px;
        }
      }
    }
    .el-col-6:first-child {
      background-color: #7ccabf;
    }
    .el-col-6:nth-child(2) {
      background-color: #e88a87;
    }
    .el-col-6:nth-child(3) {
      background-color: #8375a3;
    }
    .el-col-6:last-child {
      background-color: #9fcac1;
    }
  }
  .pic{
    display: flex;
    margin-top: 30px;
    .statisticalPie{
      width: 50%;
    }
    .ring{
      width: 50%;
    }
  }
}
</style>

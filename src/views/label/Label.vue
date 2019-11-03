<template>
  <div id="label">
    <div class="top">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="unread" name="first"></el-tab-pane>
        <el-tab-pane :label="read" name="second"></el-tab-pane>
        <el-tab-pane :label="recycle" name="third"></el-tab-pane>
      </el-tabs>
    </div>
    <div v-if="activeName === 'first'" class="inner1">
      <div v-for="(item, index) in data" :key="index" class="row">
        <div class="text">{{ item.text }}</div>
        <div class="right">
          <div class="date">{{ item.date }}</div>
          <div class="button" @click="bwyd(index)">标为已读</div>
        </div>
      </div>
      <div class="bottom">
        <div class="button" @click="bwydAll">全部标为已读</div>
      </div>
    </div>
    <div v-if="activeName === 'second'" class="inner2">
      <div v-for="(item, index) in dataYd" :key="index" class="row">
        <div class="text">{{ item.text }}</div>
        <div class="right">
          <div class="date">{{ item.date }}</div>
          <div class="button" @click="sc(index)">删除</div>
        </div>
      </div>
      <div class="bottom">
        <div class="button" @click="scAll">删除全部</div>
      </div>
    </div>
    <div v-if="activeName === 'third'" class="inner3">
      <div v-for="(item, index) in dataHs" :key="index" class="row">
        <div class="text">{{ item.text }}</div>
        <div class="right">
          <div class="date">{{ item.date }}</div>
          <div class="button" @click="hy(index)">还原</div>
        </div>
      </div>
      <div class="bottom">
        <div class="button" @click="qkAll">清空回收站</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Label",
  components: {},
  props: {},
  data() {
    return {
      activeName: 'first',
      data: [
        {
          text: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          date: "2018-04-09 22:00:00"
        },
        { text: "今晚十二点整发大红包，先到先得", date: "2018-04-19 22:00:00" }
      ],
      dataYd: [],
      dataHs: []
    };
  },
  methods: {
    handleClick() {

    },
    bwyd(index) {
      this.dataYd.push(this.data[index]);
      this.data.splice(index, 1);
    },
    sc(index) {
      this.dataHs.push(this.dataYd[index]);
      this.dataYd.splice(index, 1);
    },
    hy(index) {
      this.dataYd.push(this.dataHs[index]);
      this.dataHs.splice(index, 1);
    },
    bwydAll() {
      this.dataYd.push(...this.data);
      this.data.splice(0);
    },
    scAll() {
      this.dataHs.push(...this.dataYd);
      this.dataYd.splice(0);
    },
    qkAll() {
      this.dataHs.splice(0);
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {
    unread(){
      return `未读消息(${this.data.length})`
    },
    read(){
      return `已读消息(${this.dataYd.length})`
    },
    recycle(){
      return `回收站(${this.dataHs.length})`
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#label {
  padding: 2% 2%;
  .top {
    span {
      margin-right: 50px;
    }
    .bg {
      color: #00b7ff;
      border-bottom: 2px solid #00b7ff;
    }
  }
  .inner1 {
    background-color: white;
    margin-top: 40px;
    padding: 20px 0;
    border-radius: 10px;
    .row {
      height: 40px;
      line-height: 40px;
      font-size: 15px;
      border-bottom: gray;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .text{
        margin-left: 20px;
      }
      .right {
        display: flex;
        margin-right: 40px;
        .button {
          margin-left: 10px;
          border: 1px solid gray;
          border-radius: 6px;
          width: 60px;
          height: 38px;
          text-align: center;
          cursor: pointer;
          &:hover {
            background-color: cyan;
            color: white;
          }
        }
      }
    }
    .bottom {
      height: 60px;
      margin-top: 150px;
      margin-left: 50px;
      cursor: pointer;
      .button {
        margin-top: 15px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 100px;
        color: white;
        background-color: #00b7ff;
        border-radius: 6px;
      }
    }
  }
  .inner2 {
    background-color: white;
    margin-top: 40px;
    padding: 20px 0;
    border-radius: 10px;
    .row {
      height: 40px;
      line-height: 40px;
      font-size: 15px;
      border-bottom: gray;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .text{
        margin-left: 20px;
      }
      .right {
        display: flex;
        margin-right: 40px;
        .button {
          margin-left: 10px;
          border: 1px solid gray;
          border-radius: 6px;
          width: 60px;
          height: 38px;
          text-align: center;
          cursor: pointer;
          &:hover {
            background-color: cyan;
            color: white;
          }
        }
      }
    }
    .bottom {
      height: 60px;
      padding: 15px 0;
      margin-top: 150px;
      margin-left: 50px;
      cursor: pointer;
      .button {
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 100px;
        color: white;
        background-color: #ff4e62;
        border-radius: 6px;
      }
    }
  }
  .inner3 {
    background-color: white;
    margin-top: 40px;
    padding: 20px 0;
    border-radius: 10px;
    .row {
      height: 40px;
      line-height: 40px;
      font-size: 15px;
      border-bottom: gray;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .text{
        margin-left: 20px;
      }
      .right {
        display: flex;
        margin-right: 40px;
        .button {
          margin-left: 10px;
          border: 1px solid gray;
          border-radius: 6px;
          width: 60px;
          height: 38px;
          text-align: center;
          cursor: pointer;
          &:hover {
            background-color: cyan;
            color: white;
          }
        }
      }
    }
    .bottom {
      height: 60px;
      padding: 15px 0;
      margin-top: 150px;
      margin-left: 50px;
      cursor: pointer;
      .button {
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 100px;
        color: white;
        background-color: #c2c5ff;
        border-radius: 6px;
      }
    }
  }
}
</style>

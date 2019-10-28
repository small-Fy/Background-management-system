<template>
  <div id="label">
    <div class="top">
      <span class="wd" @click="changewd" :class="{ bg: index === 1 }"
        >未读消息({{ data.length }})</span
      >
      <span class="yd" @click="changeyd" :class="{ bg: index === 2 }"
        >已读消息({{ dataYd.length }})</span
      >
      <span class="hs" @click="changehs" :class="{ bg: index === 3 }"
        >回收站({{ dataHs.length }})</span
      >
    </div>
    <div v-if="index === 1" class="inner1">
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
    <div v-if="index === 2" class="inner2">
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
    <div v-if="index === 3" class="inner3">
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
      index: 1,
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
    changewd() {
      this.index = 1;
    },
    changeyd() {
      this.index = 2;
    },
    changehs() {
      this.index = 3;
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
  computed: {},
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

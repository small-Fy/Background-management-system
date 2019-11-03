<template>
  <div id="top">
    <div class="left">
      <span>欢迎</span>
      <span>{{ name }}</span>
      <span>来到小爱后台管理系统</span>
    </div>
    <div class="right">
      <span v-if="time > 6 && time <= 7">早上好</span>
      <span v-if="time > 12 && time <= 14">中午好</span>
      <span v-if="time > 14 && time <= 18">下午好</span>
      <span v-if="time > 18 && time <= 24">晚上好</span>
      <span v-if="time > 24 && time <= 6">该睡觉了</span>
      <span>亲爱的</span>
      <span>{{ name }}</span>
      <span>上次登录时间</span>
      <span>{{ time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  components: {},
  props: {},
  data() {
    return {
      name: "",
      time: ""
    };
  },
  methods: {
    nowTime() {
      this.name = JSON.parse(localStorage.getItem("user")).name;
    },
    nowName() {
      this.time = this.$dayjs(
        JSON.parse(localStorage.getItem("date")).time
      ).format("YYYY年MM月DD日HH:mm:ss");
    }
  },
  mounted() {
    this.nowTime();
    this.nowName();
  },
  created() {},
  filters: {},
  computed: {
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#top {
  display: flex;
  background-color: #2e5e85;
  justify-content: space-between;
  height: 60px;
  width: 96%;
  font-size: 16px;
  padding: 0 2%;
  line-height: 60px;
  color: white;
  z-index: 100;
}
</style>

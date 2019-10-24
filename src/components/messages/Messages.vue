<template>
  <div>
    <div class="top">
      <div class="people">
        <div class="img">
          <img src="../../assets/images/群.png" alt="" />
        </div>
        <div class="text">
          <div class="word">New Visits</div>
          <div class="data">
            <countTo
              :startVal="0"
              :endVal="data.visits"
              :duration="3000"
            ></countTo>
          </div>
        </div>
      </div>
      <div class="people">
        <div class="img">
          <img src="../../assets/images/消息.png" alt="" />
        </div>
        <div class="text">
          <div class="word">Messages</div>
          <div class="data">
            <countTo
              :startVal="0"
              :endVal="data.messages"
              :duration="3000"
            ></countTo>
          </div>
        </div>
      </div>
      <div class="people">
        <div class="img">
          <img src="../../assets/images/金额.png" alt="" />
        </div>
        <div class="text">
          <div class="word">Purchases</div>
          <div class="data">
            <countTo
              :startVal="0"
              :endVal="data.purchases"
              :duration="3000"
            ></countTo>
          </div>
        </div>
      </div>
      <div class="people">
        <div class="img">
          <img src="../../assets/images/购物车空.png" alt="" />
        </div>
        <div class="text">
          <div class="word">shopping</div>
          <div class="data">
            <countTo
              :startVal="0"
              :endVal="data.shopping"
              :duration="3000"
            ></countTo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "Messages",
  components: {
    countTo
  },
  props: {},
  data() {
    return {
      data: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api/homeData")
        .then(res => {
          this.data = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
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
.top {
  margin-top: 50px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  .people {
    width: 23%;
    display: flex;
    justify-content: space-around;
    background-color: white;
    border-radius: 3px;
    .img {
      img {
        width: 60px;
        margin-top: 20px;
      }
    }
    .text {
      margin-top: 20px;
      .word {
        color: #545c64;
      }
      .data {
        font-weight: bold;
        margin-top: 20px;
      }
    }
  }
}
</style>

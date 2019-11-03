<template>
  <div id="upload">
    <div class="main">
      <div class="drag">支持拖拽</div>
      <div class="element">Element Ui自带上传组件</div>
      <div class="pic">
        <el-upload
          class="upload-demo"
          drag
          action="api/upload"
          :show-file-list="false"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </div>
      <div class="clipping">支持剪裁</div>
      <div class="vue">vue-image-crop-upload</div>
      <div class="button"></div>
      <div>
        <el-button type="primary" @click="toggleShow">主要按钮</el-button>
        <my-upload
          field="file"
          @crop-success="cropSuccess"
          v-model="show"
          :width="300"
          :height="300"
          url="api/upload"
          :params="params"
          :headers="headers"
          img-format="png"
        ></my-upload>
        <img :src="imgDataUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import myUpload from "vue-image-crop-upload";
export default {
  name: "Upload",
  components: {
    "my-upload": myUpload
  },
  props: {},
  data() {
    return {
      show: false,
      params: {
        token: "123456798",
        name: "avatar"
      },
      headers: {
        smail: "*_~"
      },
      imgDataUrl: ""
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl) {
      this.imgDataUrl = imgDataUrl;
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
#upload {
  padding: 2%;
  .main {
    background-color: white;
    padding: 1%;
    .drag {
      font-size: 20px;
      font-weight: bold;
    }
    .element {
      height: 40px;
      line-height: 40px;
      background-color: #dee2ff;
      padding-left: 10px;
      margin-top: 15px;
    }
    .pic {
      margin-top: 15px;
    }
    .clipping {
      font-size: 20px;
      font-weight: bold;
      margin-top: 30px;
    }
    .vue {
      height: 40px;
      line-height: 40px;
      background-color: #dee2ff;
      padding-left: 10px;
      margin-top: 15px;
    }
    .button {
      margin-top: 30px;
      margin-bottom: 50px;
    }
  }
}
</style>

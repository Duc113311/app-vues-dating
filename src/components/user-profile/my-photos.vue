<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white mb-2">My Photos are</h2>
      <span class="text-slate-500">Add at least 2 photos to continue</span>
    </div>

    <!-- Image -->
    <div>
      <div class="mt-4 grid grid-cols-3">
        <template v-for="file in fileList" :key="file.index">
          <el-upload
            class="avatar-uploader mb-8"
            :before-upload="handleUploadbefore"
            v-model="fileListValue"
            :on-change="toggleUpload"
          >
            <i class="fa fa-plus rounded-full p-1.5 text-white icon-plus"></i>
          </el-upload>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPhotos",
  setup() {},
  data() {
    return {
      fileListValue: "",
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "plant-1.png",
          url: "/images/plant-1.png",
        },
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "plant-2.png",
          url: "/images/plant-2.png",
        },
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "figure-1.png",
          url: "/images/figure-1.png",
        },
        {
          name: "figure-1.png",
          url: "/images/figure-1.png",
        },
        {
          name: "figure-1.png",
          url: "/images/figure-1.png",
        },
        {
          name: "figure-1.png",
          url: "/images/figure-1.png",
        },
      ],
    };
  },
  methods: {
    handleUploadbefore() {
      debugger;
      this.$refs.upload.uploadFiles[0].name;
    },

    toggleUpload() {
      debugger;
    },
  },
};
</script>

<style lang="css">
.avatar-uploader {
  width: 110px;
  height: 140px;
  border: 1px solid #b8b3c0;
  display: flex;
  justify-content: center;
  padding: 7px;
  background-color: white;
  border-radius: 10px;
}
.avatar-uploader .el-upload {
  border: 2px dashed rgb(167, 70, 70);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
  width: 100%;
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #fd5d65;
  width: 178px;
  height: 178px;
  text-align: center;
}

.icon-plus {
  background-color: #fd5d65;
}
</style>

<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white mb-2">My Photos are</h2>
      <span class="text-slate-500">Add at least 2 photos to continue</span>
    </div>
    <!-- Image -->
    <div>
      <div class="mt-4 grid grid-cols-3">
        <el-upload
          v-for="file in fileList"
          :key="file.index"
          class="avatar-uploader mb-8"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          v-model="fileListValue"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i class="fa fa-plus rounded-full p-1.5 bg-red-400"></i>
        </el-upload>
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
  methods: {},
};
</script>

<style lang="css">
.avatar-uploader {
  width: 125px;
  height: 170px;
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
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>

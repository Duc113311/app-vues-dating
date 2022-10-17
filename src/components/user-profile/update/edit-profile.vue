<template>
  <div
    class="overflow-hidden w-full h-full body-profile overflow-scroll p-3"
    :style="[isShowImage ? '' : isShowScroll]"
  >
    <div class="">
      <!-- <MyPhotos :isShowHeader="isShowHeader"></MyPhotos> -->
      <MyPhotos :isShowHeader="isShowHeader"></MyPhotos>
    </div>
    <div
      class="w-full flex justify-center content-center text-center text-slate-500 text-sm mt-3"
    >
      Add a video, pic or Loop to get 4% closer to completing your profile and
      you may even get more Likes.
    </div>
    <div class="w-full text-white mt-3">
      <div class="w-full flex justify-between">
        <div>ABOUT {{ firstName }}</div>
        <div>{{ ratioAbout }}</div>
      </div>
      <div class="mt-1">
        <el-input v-model="textarea" :rows="2" type="textarea" />
      </div>
    </div>
    <div class="w-full text-white mt-3">
      <div class="title-profile">JOB TITLE</div>
      <div class="w-full mt-1">
        <el-input class="h-12" v-model="input" placeholder="Add job title" />
      </div>
    </div>
    <div class="w-full text-white mt-3">
      <div class="title-profile">COMPANY</div>
      <div class="w-full mt-1">
        <el-input class="h-12" v-model="input" placeholder="Add company" />
      </div>
    </div>
    <div class="w-full text-white mt-3">
      <div class="title-profile">COLLEGE/UNI</div>
      <div class="w-full mt-1">
        <el-input class="h-12" v-model="input" placeholder="Add university" />
      </div>
    </div>
    <div class="w-full text-white mt-3">
      <div class="title-profile">LIVING IN</div>
      <div class="w-full mt-1">
        <el-input class="h-12" v-model="input" placeholder="Add city" />
      </div>
    </div>
    <div class="w-full text-white mt-3">
      <div class="title-profile">SHOW MY INSTAGRAM PHOTOS</div>
      <div
        class="w-full content-center p-2 mt-1 h-12 bg-white rounded-md text-slate-500"
      >
        <span>Connect Instagram</span>
      </div>
    </div>
    <div class="w-full text-white mt-3">
      <div class="title-profile">GENDER</div>
      <div class="w-full mt-1">
        <el-input class="h-12" v-model="input" placeholder="Add gender" />
      </div>
    </div>
    <div class="w-full text-white mt-3">
      <div class="title-profile">SEXUAL ORIENTATION</div>
      <div class="w-full mt-1">
        <el-input class="h-12" v-model="input" placeholder="Add sexual" />
      </div>
    </div>
    <div class="h-10"></div>
  </div>
</template>

<script>
import MyPhotos from "../my-photos";
export default {
  components: { MyPhotos },
  name: "edit-profile",
  setup() {
    return;
  },

  data() {
    return {
      isShowImage: false,
      isShowScroll: {
        overflow: "scroll",
      },
    };
  },
};
</script>

<style lang="css">
.body-profile::-webkit-scrollbar {
  display: none;
}
.bd-bottom {
  border-bottom: 1px solid #373e50;
}

.body-profile {
  height: 95%;
}

.body-view-profile {
  height: 80%;
}
</style>

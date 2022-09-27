<template>
  <el-dialog
    @open="open"
    class="dialog-phone"
    v-model="showDialog"
    align-center
  >
    <div class="p-2">
      <div class="flex justify-center">
        <img
          src="../../assets/images/app_icon_512x512.png"
          width="100"
          height="100"
          alt=""
          srcset=""
        />
      </div>
      <div class="block text-center justify-center mt-3 text-white">
        <h2 class="text-2xl">Welcome to HeartLink</h2>
        <span class="text-base text-gray-400">
          Please follow our rules to have more fun and build a great community
          together
        </span>
      </div>
      <div class="mt-6"></div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "WelcomeDating",
  setup() {
    return;
  },
  data() {
    return {
      showDialog: false,
    };
  },

  props: ["isShowWelcome"],
  methods: {
    open() {
      this.showDialog = this.isShowWelcome;
    },
  },
  mounted() {
    this.showDialog = this.isShowWelcome;
  },
};
</script>

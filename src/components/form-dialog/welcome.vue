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
      <div class="mt-6 mb-6">
        <div class="flex mt-3">
          <div class="mr-2"><i class="far fa-hand-point-right"></i></div>
          <div>
            <h2>Be Yourself</h2>
            <span class="overflow-hidden break-words"
              >Make sure your photos, age and bio true to who you are</span
            >
          </div>
        </div>
        <div class="flex mt-3">
          <div class="mr-2"><i class="far fa-hand-point-right"></i></div>
          <div>
            <h2>Stay Safe</h2>
            <span
              >Don't be too quick to give out personal information.
              <a href="http://">Date Safety guidelines</a></span
            >
          </div>
        </div>
        <div class="flex mt-3">
          <div class="mr-2"><i class="far fa-hand-point-right"></i></div>
          <div>
            <h2>Play It Cool</h2>
            <span
              >Respect others and treat them as you would like to be
              treated</span
            >
          </div>
        </div>
        <div class="flex mt-3">
          <div class="mr-2"><i class="far fa-hand-point-right"></i></div>
          <div>
            <h2>Be Proactive</h2>
            <span>Alwways repory bad behaviour</span>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <el-button
          type="danger"
          class="text-base text-white w-64 rounded-lg p-5 color-button"
          @click="onClickIAgree(true)"
          >I agree</el-button
        >
      </div>
    </div>
  </el-dialog>

  <el-dialog
    class="dialog-singup"
    v-model="centerDialogVisible"
    width="90%"
    align-center
  >
    <div class="text-white">
      <h2 class="text-xl mb-4">Quit the sign-up process</h2>
      <span>
        All the information will be deleted if you exit the sing-up process now.
      </span>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button class="mr-3" @click="centerDialogVisible = false"
          >Cancel</el-button
        >
        <el-button
          class="confim"
          type="danger"
          @click="centerDialogVisible = false"
          >Ok</el-button
        >
      </span>
    </template>
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
      centerDialogVisible: false,
    };
  },

  props: ["isShowWelcome"],
  methods: {
    open() {
      this.showDialog = this.isShowWelcome;
    },

    onClickIAgree(val) {
      this.centerDialogVisible = val;
    },
  },
  mounted() {
    this.showDialog = this.isShowWelcome;
  },
};
</script>

<style lang="css">
.confim {
  background-color: #f89898 !important;
  width: 70px;
}

.dialog-singup {
  background-color: #5d4a6c;
}
</style>

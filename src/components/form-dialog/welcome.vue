<template>
  <div class="dialog-phone overflow-hidden" v-if="showDialog">
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
      <div class="mt-8 mb-6 text-white">
        <div class="flex mt-3">
          <div class="mr-4 text-xl">
            <i class="far fa-hand-point-right"></i>
          </div>
          <div>
            <h2 class="text-xl">Be Yourself</h2>
            <span class="overflow-hidden break-words text-base text-slate-500"
              >Make sure your photos, age and bio true to who you are</span
            >
          </div>
        </div>
        <div class="flex mt-3">
          <div class="mr-4 text-xl">
            <i class="far fa-hand-point-right"></i>
          </div>
          <div>
            <h2 class="text-xl">Stay Safe</h2>
            <span class="overflow-hidden break-words text-base text-slate-500"
              >Don't be too quick to give out personal information.
              <a href="http://">Date Safety guidelines</a></span
            >
          </div>
        </div>
        <div class="flex mt-3">
          <div class="mr-4 text-xl">
            <i class="far fa-hand-point-right"></i>
          </div>
          <div>
            <h2 class="text-xl">Play It Cool</h2>
            <span class="overflow-hidden break-words text-base text-slate-500"
              >Respect others and treat them as you would like to be
              treated</span
            >
          </div>
        </div>
        <div class="flex mt-3">
          <div class="mr-4 text-xl">
            <i class="far fa-hand-point-right"></i>
          </div>
          <div>
            <h2 class="text-xl">Be Proactive</h2>
            <span class="overflow-hidden break-words text-base text-slate-500"
              >Alwways repory bad behaviour</span
            >
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <el-button
          type="danger"
          class="text-base text-white w-64 rounded-lg p-5 color-button"
          @click="onClickIAgree(true)"
          >I agree</el-button
        >
      </div>
    </div>
    <el-dialog
      class="dialog-singup rounded-lg"
      v-model="centerDialogVisible"
      align-center
    >
      <div class="text-white">
        <h2 class="text-xl mb-4">Quit the sign-up process</h2>
        <span class="text-sm text-slate-400">
          All the information will be deleted if you exit the sing-up process
          now.
        </span>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            class="mr-3 text-white text-lg"
            :type="danger"
            link
            @click="centerDialogVisible = false"
            >CANCEL</el-button
          >
          <el-button
            type="danger"
            class="text-lg"
            link
            @click="onConfimWelcome(false)"
            >OK</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
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

    onConfimWelcome(val) {
      this.centerDialogVisible = val;
      this.$router.push("/profile");
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
.dialog-phone {
  width: 412px;
  height: 915px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px;
}
.dialog-singup {
  background-color: #5d4a6c;
}

/* màn hình điện thoại */

.el-button.is-link {
  color: white;
}

.el-dialog.is-align-center {
  width: 400px;
  margin-top: 25vh;
}
</style>

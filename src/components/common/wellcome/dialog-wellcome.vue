<template>
  <div class="w-full h-full user-profile absolute top-0 p-8">
    <div class="text-2xl w-full h-10 flex items-center text-white">
      <i class="fas fa-times" @click="onCloseDialog()"></i>
    </div>
    <div class="p-2 mt-10">
      <div class="mb-20">
        <div class="flex justify-center">
          <img
            src="@/assets/images/app_icon_512x512.png"
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
      </div>
      <BtArge @onShowDialogQuit="onShowDialogQuit"></BtArge>
    </div>

    <DialogQuitSingn
      @onCancelQuit="onCancelQuit"
      :isShowQuitSing="isShowQuitSing"
    ></DialogQuitSingn>
  </div>
</template>

<script>
import DialogQuitSingn from "./dialog-quit-singn";
import BtArge from "../button/bt-arge";
export default {
  components: {
    DialogQuitSingn,
    BtArge,
  },
  name: "dialog-wellcome",

  data() {
    return {
      centerDialogVisible: false,
      isShowQuitSing: false,
    };
  },

  mounted() {
    debugger;
  },

  methods: {
    onCloseDialog() {
      debugger;
      this.$emit("onHideWellcome", false);
    },

    onShowDialogQuit(value) {
      debugger;
      this.isShowQuitSing = value;
    },

    onCancelQuit() {
      this.isShowQuitSing = false;
    },
  },
};
</script>

<style lang="css">
.text-color {
  color: #737b91;
}
.user-profile {
  background-color: #232937;
}
</style>

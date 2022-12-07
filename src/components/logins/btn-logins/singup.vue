<template>
  <div>
    <div class="grid">
      <el-button
        class="cursor-pointer bg-white text-base text-black w-80 rounded-lg px-6 py-6 mb-4"
        @click="onLoginGoogle()"
      >
        <img src="@/assets/images/google_icon.svg" class="mr-2" alt="" />
        <span class="font-sans">Log in with Google</span>
      </el-button>

      <el-button
        type="primary"
        class="cursor-pointer bg-face text-base text-white w-80 rounded-lg px-6 py-6 mb-4"
        @click="onLoginFacebook()"
      >
        <img src="@/assets/images/facebook_icon.svg" class="mr-2" alt="" /><span
          class="font-sans"
          >Log in with Facebook</span
        ></el-button
      >
      <el-button
        type="danger"
        class="cursor-pointer bg-phone text-base text-white w-80 rounded-lg px-6 py-6 mb-3"
        @click="onClickPhoneNumber()"
        ><img src="@/assets/images/phone_number_icon.svg" class="mr-2" alt="" />
        <span class="font-sans">Log in with Phone number</span>
      </el-button>
    </div>
  </div>
  <form-common v-if="isShowPhoneLog"></form-common>
  <DialogWellcome :isShowWelcome="isShowWelcome"></DialogWellcome>
</template>

<script>
import DialogWellcome from "../../common/wellcome/dialog-wellcome";
import { ElNotification } from "element-plus";
import Bh_message from "@/middleware/message";
import FormCommon from "../phone-numbers/form-common.vue";
export default {
  components: {
    DialogWellcome,
    FormCommon,
  },
  name: "sing-up-btn",

  data() {
    return {
      isShowPhoneLog: false,
      isShowWelcome: false,
    };
  },
  methods: {
    warningFun() {
      ElNotification({
        title: "Warning",
        message: "This is a warning message",
        type: "warning",
      });
    },
    /**
     * Login google
     */
    onLoginGoogle() {
      debugger;

      Bh_message.bh_warning();
    },

    /**
     * Login Facebook
     */
    onLoginFacebook() {
      debugger;
      //   Bh_message.bh_warning();
      this.isShowWelcome = true;
    },

    /**
     * Login Phone Number
     */
    onClickPhoneNumber() {
      this.isShowPhoneLog = true;
    },
  },
};
</script>

<style></style>

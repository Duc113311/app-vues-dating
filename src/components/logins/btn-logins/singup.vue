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
  <DialogWellcome
    v-if="isShowWelcome"
    @onHideWellcome="onHideWellcome"
  ></DialogWellcome>
  <DialogYourEmail v-if="isShowEmail"></DialogYourEmail>
</template>

<script>
// import storeTokens from "@/stores/login/store-token";

import DialogYourEmail from "../../common/wellcome/dialog-your-email";
import DialogWellcome from "../../common/wellcome/dialog-wellcome";
import FormCommon from "../phone-numbers/form-common.vue";
export default {
  components: {
    DialogYourEmail,
    DialogWellcome,
    FormCommon,
  },
  name: "sing-up-btn",

  data() {
    return {
      isShowPhoneLog: false,
      isShowWelcome: false,
      isShowEmail: false,
    };
  },
  methods: {
    onHideWellcome(value) {
      this.isShowWelcome = value;
    },

    /**
     * Login google
     */
    onLoginGoogle() {
      debugger;
      // await storeTokens.dispatch("checkExistUserId", {
      //   id: "SzqFbvqrZnGFLmNyiwuGgfOHYFQ1",
      // });

      this.isShowEmail = true;
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

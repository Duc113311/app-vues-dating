<template>
  <div class="w-full h-full user-profile absolute top-0 p-8">
    <BtBack></BtBack>
    <h2 class="mb-2 mt-10 text-xl font-bold text-white">What's your email?</h2>

    <div class="text-color">
      Don't lose access to your account, verify your email
    </div>

    <div class="mt-3">
      <input
        class="your-email w-full text-xl mb-3 p-2 rounded"
        v-model="txtEmail"
        type="email"
        placeholder="Your name"
        @keyup="onChangeInput"
      />
    </div>
    <div class="mt-4">
      <BtContinue
        :btContinueId="btEmail"
        :isResultValidate="isResultValidate"
        @onNextWellcome="onNextWellcome"
      ></BtContinue>
    </div>
    <div class="flex mt-4 justify-center pt-3 pb-3 text-white text-xl">OR</div>
    <div class="flex mt-4 justify-center">
      <el-button
        class="cursor-pointer bg-white text-base text-black w-80 rounded-lg px-6 py-6 mb-4"
        @click="onLoginGoogle()"
      >
        <img src="@/assets/images/google_icon.svg" class="mr-2" alt="" />
        <span class="font-sans">Log in with Google</span>
      </el-button>
    </div>

    <div class="flex justify-center text-base text-color">
      Verify instantly by connecting your Google account
    </div>

    <div class="text-base flex text-white mt-4">
      <input type="radio" name="" id="" class="mr-7 w-7 bg-radio-input" />
      <span>I want to receive news, updates and offers from Heartlink</span>
    </div>
  </div>

  <DialogWellcome v-if="isShowFormWellcome"></DialogWellcome>
</template>

<script>
import storeUsers from "@/stores/user-profile/store-user";
import DialogWellcome from "./dialog-wellcome";
import validate from "@/middleware/validate";
import BtContinue from "../button/bt-continue";
import BtBack from "../button/bt-back";
export default {
  components: {
    DialogWellcome,
    BtContinue,
    BtBack,
  },
  name: "dialog-your-email",

  data() {
    return {
      centerDialogVisible: false,
      txtEmail: "",
      isResultValidate: false,
      isShowFormWellcome: false,
      btEmail: "btContinueId",
    };
  },

  methods: {
    onChangeInput() {
      debugger;
      this.isResultValidate = validate.validateEmail(this.txtEmail);
      if (this.isResultValidate) {
        document.getElementById("btContinueId").disabled = false;
        document.getElementById("btContinueId").style.backgroundColor =
          "rgb(220 20 30)";
      }
    },

    onNextWellcome(value) {
      debugger;
      this.isShowFormWellcome = value;
      storeUsers.commit("setEmail", this.txtEmail);
    },
  },
  mounted() {
    debugger;
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

.el-input__wrapper {
  background-color: #495063;
  padding: 10px;
  border: 1px solid #495063;
}

.your-email {
  color: white !important;
  background-color: #495063;
}

.your-email:focus {
  border: 1px solid white;
}
</style>

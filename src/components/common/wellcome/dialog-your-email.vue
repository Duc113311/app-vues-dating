<template>
  <div class="w-full h-full user-profile absolute top-0 p-8">
    <BtBack></BtBack>
    <h2 class="mb-2 mt-10 text-xl font-bold text-white">What's your email?</h2>

    <div class="text-color">
      Don't lose access to your account, verify your email
    </div>

    <div class="mt-3">
      <el-input
        class="your-email mb-3 p-2"
        v-model="txtFirstName"
        placeholder="Your name"
        @keyup="onChangeInput"
      />
    </div>

    <BtContinue></BtContinue>
    <div>OR</div>
    <el-button
      class="cursor-pointer bg-white text-base text-black w-80 rounded-lg px-6 py-6 mb-4"
      @click="onLoginGoogle()"
    >
      <img src="@/assets/images/google_icon.svg" class="mr-2" alt="" />
      <span class="font-sans">Log in with Google</span>
    </el-button>

    <div>Verify instantly by connecting your Google account</div>

    <el-radio :label="3"
      >I want to receive news, updates and offers from Heartlink</el-radio
    >
  </div>
</template>

<script>
import BtContinue from "../button/bt-continue";
import BtBack from "../button/bt-back";
export default {
  components: {
    BtContinue,
    BtBack,
  },
  name: "dialog-your-email",

  data() {
    return {
      centerDialogVisible: false,
    };
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
</style>

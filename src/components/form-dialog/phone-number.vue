<template>
  <el-dialog
    @open="open"
    @closed="close()"
    class="dialog-phone"
    v-model="showDialog"
    align-center
  >
    <h2 class="mb-2 text-xl text-white">My number is</h2>
    <input
      id="phone"
      type="number"
      pattern="[0-9.]+"
      class="txt-phone w-full"
      autocomplete="tel"
      name="phone"
      v-model="valCodeQR"
    />

    <div class="recapcha" id="recaptcha-container"></div>
    <div class="mt-2 text-color">
      <span
        >When you tap "Continue", Heartlink will send a text with verificatrion
        code. Message and data rates maty apply.</span
      >
      <span>The verifed phone number can be used to log in.</span>
      <a href="http://">Learn what happens when your number changes</a>
    </div>

    <div class="mt-4 flex justify-center">
      <el-button
        type="danger"
        class="text-base text-white w-72 rounded-lg p-5 color-button"
        @click="onClickCodeQR()"
        >Continue</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import intlTelInput from "intl-tel-input";

export default {
  name: "FormPhoneNumber",
  setup() {
    return;
  },
  props: ["isShowDialog"],
  data() {
    return {
      showDialog: false,
      valCodeQR: "",
    };
  },

  methods: {
    open() {
      debugger;
      this.showDialog = this.isShowDialog;
      if (this.showDialog) {
        var input = document.querySelector("#phone");
        this.valQR = intlTelInput(input, {
          utilsScript:
            "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
        });
      }
    },

    close() {
      debugger;
      this.showDialog = false;
    },

    onClickCodeQR() {
      debugger;
    },
  },

  mounted() {
    this.showDialog = this.isShowDialog;
    // var input = document.querySelector("#phone");
    // intlTelInput(input, {
    //   utilsScript:
    //     "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
    // });
  },
};
</script>

<style lang="css">
.txt-phone {
  width: 24vh;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 18px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>

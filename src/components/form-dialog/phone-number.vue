<template>
  <el-dialog
    @open="open"
    @closed="close()"
    class="dialog-phone"
    v-model="showDialog"
    align-center
  >
    <!-- Màn nhập số điện thoại theo vùng -->
    <!-- <div class="phone-number" v-if="isShowCode">
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
          >When you tap "Continue", Heartlink will send a text with
          verificatrion code. Message and data rates maty apply.</span
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
    </div> -->

    <!-- Màn nhập mã code -->
    <!-- <div class="number-code" v-else>
      <h2 class="mb-2 text-xl text-white">My code is</h2>
      <div class="mt-2 text-color">Please enter Code sent to</div>
      <div class="text-code flex justify-center mt-8 mb-8">
        <input
          type="tel"
          pattern="[0-9.]+"
          class="one-code text-center"
          autocomplete="tel"
          name="phone"
          v-model="valCodeQR"
        />
        <input
          type="tel"
          pattern="[0-9.]+"
          class="one-code text-center"
          autocomplete="tel"
          name="phone"
          v-model="valCodeQR"
        />
        <input
          type="tel"
          pattern="[0-9.]+"
          class="one-code text-center"
          autocomplete="tel"
          name="phone"
          v-model="valCodeQR"
        />
        <input
          type="tel"
          pattern="[0-9.]+"
          class="one-code text-center"
          autocomplete="tel"
          name="phone"
          v-model="valCodeQR"
        />
        <input
          type="tel"
          pattern="[0-9.]+"
          class="one-code text-center"
          autocomplete="tel"
          name="phone"
          v-model="valCodeQR"
        />
        <input
          type="tel"
          pattern="[0-9.]+"
          class="one-code text-center"
          autocomplete="tel"
          name="phone"
          v-model="valCodeQR"
        />
      </div>
      <div class="mb-4">
        <a href="#" @click="onPhoneNumber()">Update contact info</a>
      </div>
      <div class="mt-4 flex justify-center">
        <el-button
          type="danger"
          class="text-base text-white w-72 rounded-lg p-5 color-button"
          @click="onClickCodeQR()"
          >Continue</el-button
        >
      </div>
    </div> -->

    <!-- Màn nhập email -->
    <div class="email-form w-full">
      <h2 class="mb-2 text-xl text-white">What's your email?</h2>
      <div class="mt-2 text-color">
        Don't lose access to your account, verify your email
      </div>
      <input
        id="email"
        type="email"
        class="txt-phone w-36 mt-7 rounded-lg pl-3 pr-3"
        name="email"
        placeholder="Enter email"
        v-model="valCodeQR"
      />

      <div class="mt-7 flex justify-center">
        <el-button
          type="danger"
          class="text-base text-white w-64 rounded-lg p-5 color-button"
          @click="onClickEmailWelcome()"
          >Continue</el-button
        >
      </div>
      <div class="mt-7 flex justify-center">OR</div>
      <div class="mt-7 flex justify-center">
        <el-button
          class="bg-white text-base text-black w-72 rounded-lg p-5 mb-4"
          @click="onLoginGoogle()"
        >
          <img src="../../assets/images/google_icon.svg" class="mr-1" alt="" />
          Log in with Google
        </el-button>
      </div>
      <div class="mt-2 text-color">
        Verify instantly by connecting your Google account
      </div>
      <div class="mt-4 w-full overflow-hidden whitespace-nowrap">
        <el-radio-group v-model="radio1" class="ml-4">
          <el-radio label="1" size="large"
            >I want to receive news, updates and offers from Heartlink</el-radio
          >
        </el-radio-group>
      </div>
    </div>
  </el-dialog>
  <WelcomeDating :isShowWelcome="isShowWelcome"></WelcomeDating>
</template>

<script>
import WelcomeDating from "@/components/form-dialog/welcome.vue";

import intlTelInput from "intl-tel-input";

export default {
  name: "FormPhoneNumber",
  setup() {
    return;
  },
  components: {
    WelcomeDating,
  },
  props: ["isShowDialog"],
  data() {
    return {
      showDialog: false,
      valCodeQR: "",
      phoneNumber: "092282864",
      isShowCode: false,
      isShowWelcome: false,
    };
  },

  methods: {
    open() {
      this.showDialog = this.isShowDialog;
      this.isShowCode = true;
      if (this.showDialog) {
        var input = document.querySelector("#phone");
        this.valQR = intlTelInput(input, {
          utilsScript:
            "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
        });
      }
    },

    close() {
      this.showDialog = false;
    },

    onClickCodeQR() {
      this.isShowCode = false;
    },

    onPhoneNumber() {
      this.isShowCode = true;
    },

    onClickEmailWelcome() {
      this.isShowWelcome = true;
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
  width: 35vh;
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

.one-code {
  width: 48px;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  height: 48px;
  touch-action: manipulation;
  padding-left: 8px;
  padding-right: 8px;
  vertical-align: middle;
  margin-right: 5px;
}
</style>

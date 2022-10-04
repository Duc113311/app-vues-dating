<template>
  <div class="w-full h-full user-profile p-5 grid">
    <div>
      <div v-if="isShowCode !== 0" class="text-3xl">
        <i class="fas fa-chevron-left" @click="onBackForm()"></i>
      </div>
      <div v-if="isShowCode === 0" class="mt-6">
        <div class="phone-number">
          <h2 class="mb-2 text-xl font-semibold text-white">My number is</h2>
          <div class="w-full mb-5">
            <input
              id="phone"
              type="tel"
              pattern="[0-9]"
              class="txt-phone w-full rounded-lg"
              autocomplete="tel"
              name="phone"
              required
              @change="onClickInput()"
            />
            <span class="error-text text-red-600">{{
              this.sendCodeError
            }}</span>
          </div>

          <div class="text-color">
            <span
              >When you tap "Continue", Heartlink will send a text with
              verificatrion code. Message and data rates maty apply.</span
            >
            <span>The verifed phone number can be used to log in.</span>
            <a href="http://">Learn what happens when your number changes</a>
          </div>
        </div>
      </div>
      <div v-if="isShowCode === 1">
        <div class="number-code mt-6">
          <h2 class="mb-2 text-xl text-white">My code is</h2>
          <div class="mt-2 text-color">Please enter Code sent to</div>
          <div class="text-code flex justify-center mt-8 mb-8">
            <input
              type="tel"
              pattern="[0-9.]+"
              class="one-code text-center"
              autocomplete="tel"
              name="digit-1"
              id="digit-1"
              data-next="digit-2"
            />
            <input
              type="tel"
              pattern="[0-9.]+"
              class="one-code text-center"
              autocomplete="tel"
              data-previous="digit-1"
              name="digit-2"
              id="digit-2"
              data-next="digit-3"
            />
            <input
              type="tel"
              pattern="[0-9.]+"
              class="one-code text-center"
              autocomplete="tel"
              data-previous="digit-2"
              name="digit-3"
              id="digit-3"
              data-next="digit-4"
            />
            <input
              type="tel"
              pattern="[0-9.]+"
              class="one-code text-center"
              autocomplete="tel"
              name="digit-4"
              data-previous="digit-3"
              id="digit-4"
              data-next="digit-5"
            />
            <input
              type="tel"
              pattern="[0-9.]+"
              class="one-code text-center"
              autocomplete="tel"
              name="digit-5"
              data-previous="digit-4"
              id="digit-5"
              data-next="digit-6"
            />
            <input
              type="tel"
              pattern="[0-9.]+"
              class="one-code text-center"
              autocomplete="tel"
              name="digit-6"
              id="digit-6"
              data-previous="digit-5"
            />
          </div>
          <div class="mb-4">
            <a href="#" @click="onPhoneNumber()">Update contact info</a>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex justify-center mt-3">
        <el-button
          type="danger"
          class="text-base text-white w-72 rounded-lg p-5 color-button"
          @click="onClickContinueCode()"
          >Continue</el-button
        >
      </div>
    </div>
  </div>

  <Welcome v-if="isWellcome" :isShowWelcome="isWellcome"></Welcome>
</template>

<script>
import axios from "axios";

import intlTelInput from "intl-tel-input";
// import { auth } from "../../configs/firebase";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import Welcome from "@/components/form-dialog/welcome.vue";
export default {
  name: "CodeQR",
  setup() {
    const auth = getAuth();
    return {
      auth,
    };
  },
  data() {
    return {
      isShowCode: 0,
      valCodeQR: null,
      sentCodeId: "",
      sendCodeError: "",
      isWellcome: false,
    };
  },
  methods: {
    setuprecaptcha() {
      debugger;
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: function () {
            debugger;
            console.log("recature resolved");
            this.onClickContinueCode();
          },
        },
        this.auth
      );
    },
    onBackForm() {
      this.$router.go(-1);
    },
    async onClickContinueCode() {
      debugger;
      const phoneNumber = this.valCodeQR.getNumber();
      if (phoneNumber) {
        if (this.sentCodeId !== "") {
          await this.singWithPhone(this.sentCodeId);
        } else {
          this.isShowCode = this.isShowCode + 1;
          this.setuprecaptcha();
          // const recaptchaContainer = document.getElementById("recaptcha-container");
          const appVerifier = window.recaptchaVerifier;
          signInWithPhoneNumber(this.auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
              debugger;
              this.sentCodeId = confirmationResult.verificationId;
              console.log(this.sentCodeId);
            })
            .catch((error) => {
              debugger;
              console.log(error);
              // Error; SMS not sent
              // ...
            });
        }
      } else {
        this.sendCodeError = "Bạn chưa điền số điện thoại";
      }
    },
    async createTokensByUserID(userID) {
      debugger;
      try {
        await axios
          .post(
            `http://localhost:5000/heartlink-dating-project/us-central1/app/login/v1/create-token/${userID}`
          )
          .then((response) => {
            debugger;
            console.log(response);
          });
      } catch (error) {
        debugger;
        console.log(error);
      }
    },
    singWithPhone(sentCodeId) {
      const digit1 = document.getElementById("digit-1");
      const digit2 = document.getElementById("digit-2");
      const digit3 = document.getElementById("digit-3");
      const digit4 = document.getElementById("digit-4");
      const digit5 = document.getElementById("digit-5");
      const digit6 = document.getElementById("digit-6");
      const code =
        digit1.value +
        digit2.value +
        digit3.value +
        digit4.value +
        digit5.value +
        digit6.value;
      const credential = PhoneAuthProvider.credential(sentCodeId, code);
      signInWithCredential(this.auth, credential)
        .then((result) => {
          debugger;
          const userID = result.user.uid;
          this.createTokensByUserID(userID);
          this.isWellcome = true;
          console.log(result);
        })
        .catch((error) => {
          alert("error", error);
        });
    },
    onValidatePhoneNumber(val) {
      debugger;
      var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (vnf_regex.test(val) == false) {
        this.sendCodeError = "Số điện thoại của bạn không đúng định dạng";
        // Số điện thoại của bạn không đúng định dạng!
      }
    },
    onClickInput() {
      debugger;
      const mobile = document.getElementById("phone").value;
      if (mobile != "") {
        this.onValidatePhoneNumber(mobile);
      } else {
        this.sendCodeError = "Bạn chưa điền số điện thoại";
      }
    },
  },
  mounted() {
    var input = document.querySelector("#phone");
    this.valCodeQR = intlTelInput(input, {
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
    });
  },
  components: { Welcome },
};
</script>

<style lang="css">
.text-color {
  color: #737b91;
}

.user-profile {
  background-color: #232937;
  grid-template-rows: 25fr 4fr;
}
.txt-phone {
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

.iti--allow-dropdown {
  width: 100%;
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

.error-text {
}
</style>

<template>
  <div
    class="w-full h-full user-profile p-5 grid absolute top-0"
    v-if="this.isShowPhone"
  >
    <div>
      <div v-if="isShowCode !== 0" class="text-3xl">
        <i class="fas fa-chevron-left" @click="onBackForm()"></i>
      </div>
      <div v-if="isShowCode === 0" class="mt-6">
        <div class="phone-number">
          <h2 class="mb-4 text-xl font-semibold text-white">My number is</h2>
          <div class="w-full">
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
            <div
              class="error-text justify-center flex text-red-600 w-full mt-2"
            >
              {{ this.sendCodeError }}
            </div>
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
          <div class="mt-2 text-color">
            Please enter Code sent to
            <span class="text-white">{{ this.txtPhoneNumber }}</span>
          </div>
          <div class="text-code flex justify-center mt-8 mb-8">
            <input
              type="number"
              pattern="[0-9.]+"
              class="one-code text-center"
              autocomplete="tel"
              name="digit-1"
              id="digit-1"
              data-next="digit-2"
            />
            <input
              type="number"
              pattern="[0-9.]+"
              class="one-code text-center"
              autocomplete="tel"
              data-previous="digit-1"
              name="digit-2"
              id="digit-2"
              data-next="digit-3"
            />
            <input
              type="number"
              pattern="[0-9.]+"
              class="one-code text-center"
              autocomplete="tel"
              data-previous="digit-2"
              name="digit-3"
              id="digit-3"
              data-next="digit-4"
            />
            <input
              type="number"
              pattern="[0-9.]+"
              class="one-code text-center"
              autocomplete="tel"
              name="digit-4"
              data-previous="digit-3"
              id="digit-4"
              data-next="digit-5"
            />
            <input
              type="number"
              pattern="[0-9.]+"
              class="one-code text-center"
              autocomplete="tel"
              name="digit-5"
              data-previous="digit-4"
              id="digit-5"
              data-next="digit-6"
            />
            <input
              type="number"
              pattern="[0-9.]+"
              class="one-code text-center"
              autocomplete="tel"
              name="digit-6"
              id="digit-6"
              data-previous="digit-5"
            />
          </div>
          <div class="mb-4 text-color justify-center flex">
            <a href="#" @click="onPhoneNumber()">Resend code</a>
          </div>
        </div>
      </div>
    </div>

    <div>
      <!-- Phone number -->
      <div v-if="isShowCode === 0" class="flex justify-center mt-3">
        <el-button
          type="danger"
          class="text-base text-white w-72 rounded-lg p-5 color-button"
          @click="onClickContinuePhone()"
          >Continue</el-button
        >
      </div>
      <!-- QR-code -->
      <div v-if="isShowCode === 1" class="flex justify-center mt-3">
        <el-button
          type="danger"
          class="text-base text-white w-72 rounded-lg p-5 color-button"
          @click="onClickContinueCode()"
          >Continue</el-button
        >
      </div>
    </div>
  </div>
  <welcome v-if="isWellcome" :isShowWelcome="isWellcome"></welcome>
</template>

<script>
import intlTelInput from "intl-tel-input";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import storeTokens from "@/stores/login/store-token";
import welcome from "./welcome.vue";

export default {
  components: { welcome },
  name: "FormPhoneNumber",
  setup() {
    const auth = getAuth();
    return {
      auth,
    };
  },
  props: ["isShowPhone"],

  data() {
    return {
      isShowCode: 0,
      valCodeQR: null,
      sentCodeId: "",
      sendCodeError: "",
      isWellcome: false,
      txtPhoneNumber: "",
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

    async onClickContinuePhone() {
      debugger;

      const mobile = document.getElementById("phone").value;
      const result = this.onValidatePhoneNumber(mobile);
      const phoneNumber = this.valCodeQR.getNumber();
      this.txtPhoneNumber = phoneNumber;

      if (result) {
        if (phoneNumber) {
          this.setuprecaptcha();
          // const recaptchaContainer = document.getElementById("recaptcha-container");
          const appVerifier = window.recaptchaVerifier;
          signInWithPhoneNumber(this.auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
              debugger;
              this.isShowCode = this.isShowCode + 1;
              this.sentCodeId = confirmationResult.verificationId;
              console.log(this.sentCodeId);
            })
            .catch((error) => {
              debugger;
              this.sendCodeError = "You select bad domain";
              console.log(error);
              // Error; SMS not sent
              // ...
            });
        }
      }
    },

    async onClickContinueCode() {
      debugger;

      if (this.sentCodeId !== "") {
        await this.singWithPhone(this.sentCodeId);
      }
    },

    // async onClickContinueCode() {
    //   debugger;
    //   const mobile = document.getElementById("phone").value;
    //   const result = this.onValidatePhoneNumber(mobile);
    //   const phoneNumber = this.valCodeQR.getNumber();
    //   if (result) {
    //     if (phoneNumber) {
    //       if (this.sentCodeId !== "") {
    //         await this.singWithPhone(this.sentCodeId);
    //       } else {
    //         this.isShowCode = this.isShowCode + 1;
    //         this.setuprecaptcha();
    //         // const recaptchaContainer = document.getElementById("recaptcha-container");
    //         const appVerifier = window.recaptchaVerifier;
    //         signInWithPhoneNumber(this.auth, phoneNumber, appVerifier)
    //           .then((confirmationResult) => {
    //             debugger;
    //             this.sentCodeId = confirmationResult.verificationId;
    //             console.log(this.sentCodeId);
    //           })
    //           .catch((error) => {
    //             debugger;
    //             console.log(error);
    //             // Error; SMS not sent
    //             // ...
    //           });
    //       }
    //     }
    //   }
    // },

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
          storeTokens.dispatch("postTokenByUserID", { id: userID });

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
      if (val !== "") {
        if (vnf_regex.test(val) == false) {
          this.sendCodeError = "Your phone number is not wrong format";
          return false;
          // Số điện thoại của bạn không đúng định dạng!
        } else {
          this.sendCodeError = "";
          return true;
        }
      } else {
        this.sendCodeError = "You are not enter the phone number";
      }
    },
    onClickInput() {
      debugger;
      const mobile = document.getElementById("phone").value;
      if (mobile != "") {
        this.onValidatePhoneNumber(mobile);
      } else {
        this.sendCodeError = "You are not enter the phone number";
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

.iti__country-list {
  width: 29vh;
  overflow-x: clip;
}
</style>

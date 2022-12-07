<template>
  <div
    class="w-full h-full user-profile p-5 grid absolute top-0"
    v-show="isShowPhone"
  >
    <div>
      <div v-if="isShowCode !== 0" class="text-3xl text-white">
        <i class="fas fa-chevron-left" @click="onBackForm()"></i>
      </div>
      <div v-if="isShowCode === 0" class="mt-6">
        <MyNumber :sendCodeError="sendCodeError"></MyNumber>
      </div>
      <div v-if="isShowCode === 1">
        <MyCode :txtPhoneNumbers="txtPhoneNumber"></MyCode>
      </div>
    </div>

    <div>
      <!-- Phone number -->
      <div v-if="isShowCode === 0" class="flex justify-center mt-3">
        <el-button
          type="danger"
          :loading="isLoading"
          id="btContinueCode"
          class="text-base btContinueCode text-white w-72 rounded-lg p-5 color-button"
          @click="onClickContinuePhone()"
          >Continue</el-button
        >
      </div>
      <!-- QR-code -->
      <div v-if="isShowCode === 1" class="flex justify-center mt-3">
        <el-button
          type="danger"
          :loading="isLoadingCode"
          id="btContinueOTP"
          class="text-base btContinueOTP bt-myNumber text-white w-72 rounded-lg p-5 color-button"
          @click="onClickContinueCode()"
          >Continue</el-button
        >
      </div>
    </div>
  </div>
  <welcome v-if="isWellcome" :isShowWelcome="isWellcome"></welcome>
</template>

<script>
import MyCode from "../logins/phone-number/my-code";
import MyNumber from "@/components/logins/phone-number/my-number.vue";
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
  components: {
    MyCode,
    MyNumber,
    welcome,
  },
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
      txtPhoneNumber: "+098232323",
      isLoading: false,
      isLoadingCode: false,
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
      debugger;
      this.isShowCode = this.isShowCode - 1;
      var input = document.querySelector("#phone");
      this.valCodeQR = intlTelInput(input, {
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
      });
    },

    async onClickContinuePhone() {
      debugger;
      this.isLoading = true;

      const mobile = document.getElementById("phone").value;
      const result = this.onValidatePhoneNumber(mobile);
      const phoneNumber = this.valCodeQR.getNumber();
      this.txtPhoneNumber = phoneNumber;
      debugger;
      if (result) {
        if (phoneNumber) {
          debugger;

          await this.setuprecaptcha();
          // const recaptchaContainer = document.getElementById("recaptcha-container");
          const appVerifier = window.recaptchaVerifier;
          await signInWithPhoneNumber(this.auth, phoneNumber, appVerifier)
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
        debugger;
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
      this.isLoadingCode = true;

      const credential = PhoneAuthProvider.credential(sentCodeId, code);
      signInWithCredential(this.auth, credential)
        .then(async (result) => {
          debugger;
          const userID = result.user.uid;
          await storeTokens.dispatch("postTokenByUserID", { id: userID });
          await storeTokens.dispatch("checkAppAccess", { id: userID });
          // Check lần show wellcome
          const isShowAccess = storeTokens.state.isAppAccess;
          if (!isShowAccess) {
            this.isWellcome = true;
          } else {
            this.isLoadingCode = false;
            this.$router.push("/home");
          }
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
    debugger;
    var input = document.querySelector("#phone");
    this.valCodeQR = intlTelInput(input, {
      initialCountry: "auto",
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
    });

    document.querySelector(".btContinueCode").disabled = true;
    document.querySelector(".btContinueCode").style.backgroundColor = "#382e41";
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
  overflow-x: clip;
}
</style>

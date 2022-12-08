<template>
  <div class="w-full h-full user-profile p-8 grid absolute top-0">
    <div>
      <MyNumber
        @validateRequirePhone="validateRequire"
        v-if="screenNumber === 0"
      ></MyNumber>
      <div v-else>
        <BtBack></BtBack>
        <MyCode
          :sentCodeId="sentCodeId"
          :txtErrorCode="txtErrorCode"
          @onUpdateLoading="onUpdateLoading"
          @validateRequireCode="validateRequire"
          :txtPhoneNumber="txtPhoneNumber"
        ></MyCode>
      </div>
    </div>

    <BtContinue
      :isStatusRequire="isStatusRequire"
      @onNextScreen="onNextScreen"
    ></BtContinue>
  </div>
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
import BtBack from "../../common/button/bt-back";
import MyCode from "./my-code";
import BtContinue from "../../common/button/bt-continue";
import MyNumber from "./my-number";
export default {
  components: {
    BtBack,
    MyCode,
    BtContinue,
    MyNumber,
  },
  name: "form-common",
  props: ["isShowPhone"],
  setup() {
    const auth = getAuth();
    return {
      auth,
    };
  },
  data() {
    return {
      // statusLoading: false,
      isValue: false,
      screenNumber: 0,
      isStatusRequire: false,
      isLoading: false,
      txtPhoneNumber: "",
      sentCodeId: "",
      codeOTP: "",
      txtErrorCode: false,
    };
  },

  methods: {
    validateRequire(value) {
      debugger;
      const statusActive = value.statusActive;
      this.codeOTP = value.codeOTP;
      this.isStatusRequire = statusActive;
      document.querySelector(".btContinueCode").disabled = statusActive;
      if (!statusActive) {
        document.querySelector(".btContinueCode").style.backgroundColor =
          "rgb(220 20 30)";
      } else {
        document.querySelector(".btContinueCode").style.backgroundColor =
          "#382e41";
      }
    },

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
    /**
     * Next sang scream
     * @param {*} val
     */
    async onNextScreen(value) {
      debugger;
      this.screenNumber = this.screenNumber + value;

      if (this.screenNumber === 1) {
        const mobile = document.getElementById("phone").value;
        console.log(mobile);
        const result = true;
        const phoneNumber = this.valCodeQR.getNumber();
        this.txtPhoneNumber = phoneNumber;

        if (result) {
          if (phoneNumber) {
            debugger;

            await this.setuprecaptcha();
            // const recaptchaContainer = document.getElementById("recaptcha-container");
            const appVerifier = window.recaptchaVerifier;
            await signInWithPhoneNumber(this.auth, phoneNumber, appVerifier)
              .then((confirmationResult) => {
                debugger;
                this.sentCodeId = confirmationResult.verificationId;
                console.log(this.sentCodeId);
              })
              .catch((error) => {
                debugger;
                this.sendCodeError = "You select bad domain";
                console.log(error);
                // ...
              });
          }
        }
      } else {
        if (this.sentCodeId !== "") {
          await this.singWithPhone(this.sentCodeId);
        } else {
          this.txtErrorCode = true;
        }
      }
    },

    singWithPhone(sentCodeId) {
      debugger;
      const credential = PhoneAuthProvider.credential(sentCodeId, this.codeOTP);
      signInWithCredential(this.auth, credential)
        .then(async (result) => {
          debugger;
          const userID = result.user.uid;
          // Check lần show wellcome
          console.log(userID);
        })
        .catch((error) => {
          this.txtErrorCode = true;
          alert("error", error);
        });
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
</style>

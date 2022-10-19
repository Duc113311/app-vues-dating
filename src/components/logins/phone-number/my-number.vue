<template>
  <div class="phone-number">
    <h2 class="mb-4 text-xl font-semibold text-white">My number is</h2>
    <div class="w-full">
      <input
        id="phone"
        type="number"
        pattern="[0-9.]+"
        class="txt-phone w-full rounded-lg"
        name="phone"
        v-model="valCodeQR"
        @change="onClickInput"
      />
      <div class="error-text justify-center flex text-red-600 w-full mt-2">
        {{ this.txtCodeError }}
      </div>
    </div>

    <div class="text-color">
      <span
        >When you tap "Continue", Heartlink will send a text with verificatrion
        code. Message and data rates maty apply.</span
      >
      <span>The verifed phone number can be used to log in.</span>
      <a href="http://">Learn what happens when your number changes</a>
    </div>
  </div>
</template>

<script>
import intlTelInput from "intl-tel-input";

export default {
  name: "component-my-name",
  setup() {
    return;
  },
  props: {
    sendCodeError: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      valCodeQR: "",
      txtCodeError: "",
    };
  },

  computed: {},

  methods: {
    //#region Common function

    /**
     * Validate phone number
     * @param {*} val
     */
    onValidatePhoneNumber(val) {
      debugger;
      var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (val !== "") {
        if (vnf_regex.test(val) == false) {
          this.txtCodeError = "Your phone number is not wrong format";
          document.querySelector(".btContinueCode").disabled = true;
          document.querySelector(".btContinueCode").style.backgroundColor =
            "#382e41";
          return false;
          // Số điện thoại của bạn không đúng định dạng!
        } else {
          this.txtCodeError = "";
          document.querySelector(".btContinueCode").disabled = false;
          document.querySelector(".btContinueCode").style.backgroundColor =
            "red";
          return true;
        }
      } else {
        this.txtCodeError = "You are not enter the phone number";
        document.querySelector(".btContinueCode").disabled = true;
        document.querySelector(".btContinueCode").style.backgroundColor =
          "#382e41";
      }
    },
    //#endregion

    //#region Action
    /**
     * Sự kiện khi click input
     */
    onClickInput() {
      debugger;
      const mobile = document.getElementById("phone").value;
      if (mobile != "") {
        this.onValidatePhoneNumber(mobile);
      } else {
        this.txtCodeError = "You are not enter the phone number";
      }
    },
    //#endregion
  },

  created() {},

  mounted() {
    debugger;
    var input = document.querySelector("#phone");
    this.valCodeQR = intlTelInput(input, {
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
    });
  },
};
</script>

<style lang="css">
.txt-phone {
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 18px;
}

.txt-phone:focus {
  outline: none;
}

.iti__country-list {
  width: 28.3vh !important;
}
.iti__country-list::-webkit-scrollbar {
  display: none !important;
}
</style>

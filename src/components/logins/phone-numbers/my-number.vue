<template>
  <div class="phone-number">
    <h2 class="mb-4 text-xl font-bold text-white">My number is</h2>
    <div class="w-full">
      <div class="w-full">
        <input
          id="phone"
          type="number"
          pattern="[0-9.]+"
          class="txt-phone w-full rounded-lg"
          placeholder="Phone number"
          name="phone"
          v-model="valCodeQR"
          @change="onClickInput"
        />
      </div>
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
import $ from "jquery";
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
      var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (val !== "") {
        if (vnf_regex.test(val) == false) {
          this.txtCodeError = "Your phone number is not wrong format";
          this.$emit("validateRequirePhone", { statusActive: true });

          // Số điện thoại của bạn không đúng định dạng!
        } else {
          this.txtCodeError = "";

          this.$emit("validateRequirePhone", { statusActive: false });
        }
      } else {
        this.txtCodeError = "You are not enter the phone number";
        this.$emit("validateRequirePhone", { statusActive: true });
      }
    },
    //#endregion

    //#region Action
    /**
     * Sự kiện khi click input
     */
    onClickInput() {
      const mobile = document.getElementById("phone").value;
      if (mobile != "") {
        this.onValidatePhoneNumber(mobile);
      } else {
        this.txtCodeError = "You are not enter the phone number";
      }
    },
    //#endregion
  },

  mounted() {
    var input = document.querySelector("#phone");
    this.valCodeQR = intlTelInput(input, {
      initialCountry: "auto",
      geoIpLookup: function (callback) {
        $.get("https://ipinfo.io", function () {}, "jsonp").always(function (
          resp
        ) {
          var countryCode = resp && resp.country ? resp.country : "vn";
          callback(countryCode);
        });
      },
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

.iti--allow-dropdown {
  width: 100% !important;
}
.iti__flag-container {
  padding: 10px;
}
.iti__country-list::-webkit-scrollbar {
  display: none !important;
}

#phone {
  padding-left: 58px;
  padding-right: 58px;
  background-color: #495063;
  border: 1px solid #495063 !important;
  color: white;
}
</style>

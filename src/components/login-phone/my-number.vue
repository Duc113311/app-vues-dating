<template>
  <div class="phone-number">
    <h2 class="mb-2 text-xl font-semibold text-white">My number is</h2>
    <div class="w-full">
      <input
        id="phone"
        type="number"
        pattern="[0-9.]+"
        class="txt-phone w-full rounded-lg"
        autocomplete="tel"
        name="phone"
        v-model="valCodeQR"
      />
    </div>

    <div class="recapcha" id="recaptcha-container"></div>
    <div class="mt-5 text-color">
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
  name: "MyPhone",

  setup() {
    return;
  },
  data() {
    return {
      valCodeQR: "",
    };
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
.user-profile {
  background-color: #382e41;
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
</style>

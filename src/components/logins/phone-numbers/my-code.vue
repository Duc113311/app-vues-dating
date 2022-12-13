<template>
  <div class="number-code mt-5">
    <h2 class="mb-4 text-xl font-bold text-white">My code is</h2>
    <div class="mt-2 text-color">
      Please enter Code sent to
      <span class="text-white">{{ this.renderPhoneNumber }}</span>
    </div>
    <div class="text-code flex justify-center mt-8 mb-8">
      <input
        type="text"
        class="digit-box one-code text-center"
        v-for="(el, ind) in digits"
        :id="el"
        :key="el + ind"
        v-model="renderCodeOTP[ind]"
        @keyup="onNextOn(el, ind)"
        :autofocus="ind === 0"
        :placeholder="ind + 1"
        maxlength="1"
      />
    </div>
    <ErValidate v-if="renderErrorCode"></ErValidate>
    <div class="mt-10 text-color justify-center flex">
      <a class="cursor-pointer bt-render" href="#" @click="onPhoneNumber()"
        >Resend code</a
      >
    </div>
  </div>
</template>

<script>
import ErValidate from "../../common/error/er-validate";
export default {
  components: { ErValidate },
  name: "my-code",
  setup() {},

  data() {
    return {
      digitCount: 4,
      digits: [1, 2, 3, 4, 5, 6],
    };
  },

  props: ["txtPhoneNumber", "valueText", "txtErrorCode", "sentCodeId"],

  computed: {
    renderPhoneNumber() {
      debugger;
      return this.txtPhoneNumber;
    },

    renderErrorCode() {
      return this.txtErrorCode;
    },

    renderCodeOTP() {
      return this.valueText;
    },
  },

  methods: {
    /**
     * Render gửi lại mã OTP
     */
    onPhoneNumber() {
      debugger;
      this.$emit("onRenderCodeOTP", this.txtPhoneNumber);
    },

    onCheckOTP() {
      debugger;
      this.$emit("validateRequireCode", true);
    },

    onNextOn(key, on) {
      console.log(key, on);
      debugger;
      const indexData = document.getElementById(key);
      const valueData = indexData.value;
      if (valueData !== "") {
        const nextBling = this.digits.length;
        if (nextBling !== key) {
          indexData.nextSibling.focus();
        } else {
          this.valueCode = this.valueText.toString().split(",").join("");

          if (this.valueCode !== "") {
            this.$emit("validateRequireCode", {
              statusActive: false,
              codeOTP: this.valueCode,
            });
          }
        }
      }
      debugger;
    },
  },

  created() {
    document.querySelector(".btContinueCode").disabled = true;
    document.querySelector(".btContinueCode").style.backgroundColor = "#382e41";
  },

  mounted() {
    debugger;
  },
};
</script>

<style lang="css">
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

.bt-render:hover {
  color: #ffffff;
}

.text-color {
  color: #737b91;
}
</style>

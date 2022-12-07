<template>
  <div class="number-code mt-5">
    <h2 class="mb-4 text-xl font-bold text-white">My code is</h2>
    <div class="mt-2 text-color">
      Please enter Code sent to
      <span class="text-white">{{ this.renderPhoneNumber }}</span>
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
        @change="onCheckOTP()"
      />
    </div>
    <ErValidate :txtCodeError="txtCodeError"></ErValidate>
    <div class="mt-10 text-color justify-center flex">
      <a class="cursor-pointer bt-render" href="#" @click="onPhoneNumber()"
        >Resend code</a
      >
    </div>
  </div>
</template>

<script>
import ErValidate from "../../common/error/er-validate";
import storeTokens from "../../../stores/login/store-token.js";
export default {
  components: { ErValidate },
  name: "my-code",
  setup() {},

  data() {
    return {
      txtCodeError: "Invalid code. please try again",
    };
  },

  props: {
    txtPhoneNumbers: {
      type: String,
      required: true,
    },
  },

  computed: {
    renderPhoneNumber() {
      debugger;
      return this.txtPhoneNumbers;
    },
  },

  methods: {
    /**
     * Render gửi lại mã OTP
     */
    onPhoneNumber() {},

    onCheckOTP() {},
  },

  mounted() {
    storeTokens.commit("setIsLoadingButton", false);

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

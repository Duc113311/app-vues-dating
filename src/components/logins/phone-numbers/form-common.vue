<template>
  <div class="w-full h-full user-profile p-8 grid absolute top-0">
    <div>
      <BtBack></BtBack>
      <MyNumber
        @statusLoading="isShowStatus"
        @onUpdateLoading="onUpdateLoading"
        v-if="screenNumber === 0"
      ></MyNumber>

      <MyCode
        @onUpdateLoading="onUpdateLoading"
        v-if="screenNumber === 1"
      ></MyCode>
    </div>

    <BtContinue
      :isLoading="isLoading"
      :isShowTwos="isShowTwo"
      @isNumber="onNumber"
    ></BtContinue>
  </div>
</template>

<script>
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

  data() {
    return {
      // statusLoading: false,
      isValue: false,
      screenNumber: 0,
      isShowTwo: false,
      isLoading: false,
    };
  },

  methods: {
    onUpdateLoading() {
      this.isLoading = false;
    },
    isShowStatus(value) {
      debugger;
      this.isShowTwo = value;
    },
    onNumber(val) {
      debugger;
      this.isLoading = true;
      this.screenNumber = this.screenNumber + val;
    },
  },

  mounted() {
    debugger;
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

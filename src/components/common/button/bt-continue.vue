<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center">
    <el-button
      type="danger"
      :loading="isLoading"
      :id="btContinueId"
      class="text-base btContinueCode cursor-pointer text-white w-full rounded-lg p-6 color-button"
      @click="onClickContinues"
      >Continue</el-button
    >
  </div>
</template>

<script>
// import storeTokens from "../../../stores/login/store-token.js";
export default {
  name: "bt-continue",
  props: ["isStatusRequire", "isResultValidate", "btContinueId"],
  data() {
    return {
      isLoading: false,
      isNumber: 0,
    };
  },

  computed: {
    // isLoading() {
    //   return storeTokens.state.isLoadingBtn;
    // },
  },

  methods: {
    /**
     * Sự kiện click để tiếp tục
     */
    onClickContinues() {
      if (!this.isStatusRequire) {
        this.$emit("onNextScreen", 1);
      }

      if (this.isResultValidate) {
        this.$emit("onNextWellcome", true);
      }

      // this.isLoading = true;
      // document.querySelector(".btContinueCode").disabled = true;
      // document.querySelector(".btContinueCode").style.backgroundColor =
      //   "rgb(220 20 30)";
    },
  },
};
</script>

<style lang="css">
.color-button {
  background-color: #382e41;
  border: 1px solid #2e465c !important;
}

.color-button:hover,
.color-button:active,
.color-button:focus {
  background-color: #242a38;
}
</style>

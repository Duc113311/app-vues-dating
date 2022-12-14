<template>
  <div class="flex justify-center w-full pl-10 pr-10 items-center">
    <el-button
      type="danger"
      class="text-base text-white w-64 rounded-lg p-5 color-bt"
      @click="onClickIAgree()"
      >I agree</el-button
    >
  </div>
</template>

<script>
export default {
  name: "bt-arge",

  data() {
    return {};
  },

  methods: {
    /**
     * Click show dialog
     */
    onClickIAgree() {
      this.$emit("onShowDialogQuit", true);
    },
  },
};
</script>

<style lang="css">
.color-bt {
  background-color: #fd5d65;
}
</style>

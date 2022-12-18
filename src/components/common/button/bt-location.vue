<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center">
    <el-button
      type="danger"
      :loading="isLoading"
      id="btContinueCode"
      class="text-base btContinueCode cursor-pointer text-white w-full rounded-lg p-6 color-button"
      @click="onClickContinues"
      >Allow Location</el-button
    >
  </div>
</template>

<script>
export default {
  name: "bt-location",
  data() {
    return {
      isLoading: false,
      isNumber: 0,
    };
  },

  computed: {},

  methods: {
    /**
     * Sự kiện click để tiếp tục
     */
    onClickContinues() {
      debugger;
    },
  },
  created() {
    debugger;
  },
};
</script>

<style lang="css">
.color-button {
  background-color: #fd5d65;
  border: 1px solid #fd5d65 !important;
}

.color-button:hover,
.color-button:active,
.color-button:focus {
  background-color: #fd5d65;
}
</style>

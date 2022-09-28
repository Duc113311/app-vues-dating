<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white">My name is</h2>
    </div>
    <div class="mt-6">
      <el-input
        class="your-name mb-3"
        v-model="input"
        placeholder="Your name"
        clearable
      />
      <span class="text-slate-500 mt-3"
        >This is how it will appear in HeartLink, and you will not able to
        change it</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Your-Name",

  setup() {
    return;
  },

  data() {
    return {};
  },
};
</script>

<style lang="css">
.el-input__wrapper {
  background-color: #696a7d;
}
.your-name .el-input__inner {
  background-color: #696a7d;
  --el-input-inner-height: 45px !important;
  font-size: larger !important;
  padding: 10px;
}
</style>

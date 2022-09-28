<template>
  <div>
    <div class="mt-10 mb-6">
      <h2 class="text-2xl text-white">I am a</h2>
    </div>
    <div class="grid w-full">
      <el-button class="rounded-lg p-6 mb-4">Woman</el-button>
      <el-button class="rounded-lg p-6">Man</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Im-Sex",
  setup() {
    return;
  },
  data() {
    return {};
  },
};
</script>

<style lang="css">
.el-button + .el-button {
  margin-left: 0px !important;
}
</style>

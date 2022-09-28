<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white">My birthday is</h2>
    </div>
    <div class="mt-6">
      <el-input
        class="your-name mb-3"
        v-model="input"
        placeholder="dd/mm/yyyy"
        clearable
      />
      <span class="text-slate-500 mt-3">Your age will be public</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Birth-Day",
  setup() {
    return;
  },
  data() {
    return;
  },
};
</script>

<style lang="css"></style>

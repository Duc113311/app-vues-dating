<template>
  <div class="error-text justify-center flex text-red-600 w-full">
    {{ this.txtCodeError }}
  </div>
</template>

<script>
export default {
  name: "er-validate",

  props: ["txtCodeError"],

  data() {
    return {};
  },
};
</script>

<style></style>

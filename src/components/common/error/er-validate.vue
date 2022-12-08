<template>
  <div class="error-text justify-center flex text-red-600 w-full">
    {{ txtCodeError }}
  </div>
</template>

<script>
export default {
  name: "er-validate",

  data() {
    return {
      txtCodeError: "Invalid code. please try again",
    };
  },
};
</script>

<style></style>

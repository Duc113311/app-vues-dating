<template>
  <div class="w-full h-full user-profile absolute top-0 p-8">
    <BtBack></BtBack>
    <h2 class="mb-4 text-xl font-bold text-white">What's your email?</h2>

    <div class="text-color">
      Don't lose access to your account, verify your email
    </div>
  </div>
</template>

<script>
import BtBack from "../button/bt-back";
export default {
  components: {
    BtBack,
  },
  name: "dialog-your-email",

  data() {
    return {
      centerDialogVisible: false,
    };
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
}
</style>

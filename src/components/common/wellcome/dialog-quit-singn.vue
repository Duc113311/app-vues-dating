<template>
  <div>
    <el-dialog
      class="dialog-singup rounded-lg"
      :show-close="false"
      v-model="showFormQuit"
      align-center
    >
      <div class="text-white">
        <h2 class="text-xl mb-4">Quit the sign-up process</h2>
        <span class="text-xl text-slate-400">
          All the information will be deleted if you exit the sing-up process
          now.
        </span>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            class="mr-3 color-cancel text-lg"
            link
            @click="onCancelWelcome"
            >CANCEL</el-button
          >
          <el-button
            type="danger"
            class="text-lg"
            link
            @click="onConfimWelcome(false)"
            >OK</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "dialog-quit-singn",

  props: ["isShowQuitSing"],

  data() {
    return {
      centerDialogVisible: false,
    };
  },

  computed: {
    showFormQuit() {
      return this.isShowQuitSing;
    },
  },

  methods: {
    onConfimWelcome() {
      this.$router.push("/profile");
    },

    onCancelWelcome() {
      this.$emit("onCancelQuit", false);
    },
  },
};
</script>

<style lang="css">
.dialog-singup {
  background-color: #434a5d;
  width: 450px;
}

.color-cancel {
  color: white !important;
}
</style>

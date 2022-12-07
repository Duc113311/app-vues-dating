<template>
  <div>
    <el-dialog
      class="dialog-singup rounded-lg"
      v-model="centerDialogVisible"
      align-center
    >
      <div class="text-white">
        <h2 class="text-xl mb-4">Quit the sign-up process</h2>
        <span class="text-sm text-slate-400">
          All the information will be deleted if you exit the sing-up process
          now.
        </span>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            class="mr-3 text-white text-lg"
            :type="danger"
            link
            @click="centerDialogVisible = false"
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

  data() {
    return {
      centerDialogVisible: false,
    };
  },

  methods: {
    onConfimWelcome() {},
  },
};
</script>

<style></style>

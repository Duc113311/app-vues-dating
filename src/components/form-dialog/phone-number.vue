<template>
  <div>
    <el-dialog
      v-model="centerDialogVisible"
      title="Warning"
      width="30%"
      align-center
    >
      <span>Open the dialog from the center from the screen</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  setup() {
    return;
  },
  data() {
    return {
      centerDialogVisible: true,
    };
  },
  props: {},
};
</script>

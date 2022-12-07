import { ElMessage } from "element-plus";

const bh_messages = {};

/**
 * Chọn thành công
 */
bh_messages.bh_success = () => {
  ElMessage({
    message: "Successful selection",
    type: "success",
  });
};

/**
 * Tính năng đang phát triển
 */
bh_messages.bh_warning = () => {
  ElMessage({
    message: "The skills are improving",
    type: "warning",
  });
};
export default bh_messages;

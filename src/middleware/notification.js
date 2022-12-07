import { ElNotification } from "element-plus";

const bh_notification = {};

/**
 * This is a warning message: Warning
 */
bh_notification.bh_warning = () => {
  ElNotification({
    title: "Warning",
    message: "The skills are improving",
    type: "warning",
  });
};

/**
 * Thông báo xử lý thành công
 */
bh_notification.bh_success = () => {
  ElNotification({
    title: "Success",
    message: "Successfully processed",
    type: "success",
  });
};

export default bh_notification;

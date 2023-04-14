const multer = require("@koa/multer");
const { UPLOAD_PATH } = require("../config/path");

// 上传头像
const uploadAvatar = multer({
  dest: UPLOAD_PATH,
});

const handleAvatarUpload = uploadAvatar.single("avatar");

module.exports = handleAvatarUpload;

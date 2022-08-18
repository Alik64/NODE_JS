const multer = require("multer");
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "src/uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = {
  upload,
};

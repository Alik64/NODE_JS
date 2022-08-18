const upload = (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
};

module.exports = {
  upload,
};

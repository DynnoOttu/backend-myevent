const Images = require("../../api/v1/images/model");

const genereteImage = async (req) => {
  const result = `uploads/${req.file.filename}`;
  return result;
};

const createImages = async (req) => {
  const result = await Images.create({
    name: req.file
      ? `uploads/${req.file.filename}`
      : "uploads/avatar/image_default.jpg",
  });

  return result;
};

module.exports = { createImages, genereteImage };

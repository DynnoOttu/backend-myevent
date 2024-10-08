const Images = require("../../api/v1/images/model");
const { NotFoundError } = require("../../errors");

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

const checkingImage = async (id) => {
  const result = await Images.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id :  ${id}`);

  return result;
};

module.exports = { createImages, genereteImage, checkingImage };

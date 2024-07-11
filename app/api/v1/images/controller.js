const {
  genereteImage,
  createImages,
} = require("../../../services/mongose/image");
const { StatusCodes } = require("http-status-codes");

const create = async (req, res, next) => {
  try {
    console.log("req.file", req.file);
    const result = await createImages(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
    return result;
  } catch (error) {
    next(error);
  }
};

module.exports = { create };

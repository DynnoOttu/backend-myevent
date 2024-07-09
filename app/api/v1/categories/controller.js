const { StatusCodes } = require("http-status-codes");

const {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
} = require("../../../services/mongose/categories");

const create = async (req, res, next) => {
  try {
    const result = await createCategories(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllCategories();
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const result = await getOneCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteCategories(req);
    res.status(StatusCodes.OK).json({
      message: "Delete Categories Success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  index,
  findById,
  update,
  destroy,
};

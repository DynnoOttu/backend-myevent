const { StatusCodes } = require("http-status-codes");

const {
  createCMSOrgizer,
  createUsers,
} = require("../../../services/mongose/users");

const create = async (req, res, next) => {
  try {
    const result = await createCMSOrgizer(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createCMSUser = async (req, res, next) => {
  try {
    const result = await createUsers(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  createCMSUser,
};
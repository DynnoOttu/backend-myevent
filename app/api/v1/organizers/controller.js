const { StatusCodes } = require("http-status-codes");

const { createCMSOrgizer } = require("../../../services/mongose/users");

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

module.exports = {
  create,
};

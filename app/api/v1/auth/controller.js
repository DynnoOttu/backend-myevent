const { signin } = require("../../../services/mongose/auth");

const { StatusCodes } = require("http-status-codes");

const signinCms = async (req, res, next) => {
  try {
    const result = await signin(req);

    res.status(StatusCodes.CREATED).json({
      data: { tokentoken: result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { signinCms };

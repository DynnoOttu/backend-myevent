const User = require("../../api/v1/users/model");
const {
  BadRequestError,
  UnauthorizedError,
  UnauthenticatedError,
} = require("../../errors");
const { createTokenUser, createJWT } = require("../../utils");

const signin = async (req) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const result = await User.findOne({ email });
  if (!result) {
    throw new UnauthorizedError("Invalid Credentials");
  }

  const isPasswordCorrect = await result.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const token = createJWT({ payload: createTokenUser(result) });
  return { token, role: result.role };
};

module.exports = { signin };

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtExpiration: "24h",
  jwtSecret: process.env.JWT_SECRET,
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};

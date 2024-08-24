const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

const categoriesRouter = require("./app/api/v1/categories/router");
const imagesRouter = require("./app/api/v1/images/router");
const talentsRouter = require("./app/api/v1/talents/router");
const eventRouter = require("./app/api/v1/events/router");
const organizersRouter = require("./app/api/v1/organizers/router");
const authCMSRouter = require("./app/api/v1/auth/router");
const ordersRouter = require("./app/api/v1/orders/router");

const v1 = "/api/v1/cms";

const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/hendler-error");
// const handleErrorMiddleware = require("./app/middlewares/handler-error");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to my event",
  });
});

app.use(v1, categoriesRouter);
app.use(v1, imagesRouter);
app.use(v1, talentsRouter);
app.use(v1, eventRouter);
app.use(v1, organizersRouter);
app.use(v1, authCMSRouter);
app.use(v1, ordersRouter);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;

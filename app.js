const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { HttpError } = require("./helpers");
const path = require("path");

const authRouter = require("./routes/api/auth");
const userRouter = require("./routes/api/users");
const productRouter = require("./routes/api/products");
const exercisesRouter = require("./routes/api/exercises");
const profileRouter = require("./routes/api/profiles");
const dairyRouter = require("./routes/api/dairys");

const STATIC_PATH = path.join(__dirname, "public");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(STATIC_PATH));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/exercises", exercisesRouter);
app.use("/api/profiles", profileRouter);
app.use("/api/dairys", dairyRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  throw HttpError(404, "Not found");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json(message);
});

module.exports = app;

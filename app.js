const express = require("express");
const createError = require("http-errors");
const errorHandlingMiddleware = require("./middleware/error-handling.middleware");
const app = express();
const PORT = process.env.PORT || 8000;
const mainRouter = require("./routes");

app.use(express.json());
app.use("/api", mainRouter);

app.use("*", (req, res, next) => {
  next(createError(404, "This is not found"));
});

app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT} `);
});

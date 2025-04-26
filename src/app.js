const express = require("express");

const { usersRouter } = require("./routes");
const { connectDatabase } = require("./db");

const app = express();
const PORT = 8080;

connectDatabase();

function globalErrorHandler(err, _req, res, next) {
  console.log(err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json("Internal server error", { error: err });
}

app.use("/users", usersRouter);
app.use(globalErrorHandler);
app.use((_req, res, _next) =>
  res.status(404).json("These are not the droids you're looking for.")
);

app.listen(PORT);

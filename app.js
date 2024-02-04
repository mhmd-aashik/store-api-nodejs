require("dotenv").config();

require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

const notFoundMiddleWare = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/v1/products">products page</a>');
});

app.use("/api/v1/products", productsRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`🟢 port is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");

app.use(express.json());

app.use("/", (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/v1/products">products page</a>');
});

app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

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

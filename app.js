const express = require("express");
const app = express();

const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");

app.use(express.json());

app.use("/", (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/v1/products">products page</a>');
});

app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const port = 3000;

const start = () => {
  app.listen(port, console.log(`🟢 port is listening on ${port}`));
  try {
  } catch (error) {
    console.log(`🔴 , error`);
  }
};

start();

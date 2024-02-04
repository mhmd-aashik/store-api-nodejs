require("dotenv").config();

const connectDb = require("./db/connect");
const Product = require("./model/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);

    console.log("🟢 db connected");
  } catch (error) {
    console.log(error);
  }
};

start();

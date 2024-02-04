const Product = require("../model/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ price: 25 });
  res.status(200).json({ length: products.length, data: products });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ message: "get all products" });
};

module.exports = { getAllProductsStatic, getAllProducts };

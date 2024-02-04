const Product = require("../model/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ price: 25 });
  res.status(200).json({ length: products.length, data: products });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  const products = await Product.find(queryObject);

  res.status(200).json({ length: products.length, data: products });
};

module.exports = { getAllProductsStatic, getAllProducts };

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "get all static products" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ message: "get all products" });
};

module.exports = { getAllProductsStatic, getAllProducts };

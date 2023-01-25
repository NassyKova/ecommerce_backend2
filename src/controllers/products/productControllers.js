const Product = require("../../models/product");

const products = [
  { title: "Bag", description: "Bag for all", price: 42, stock: 10 },
  { title: "Ring", description: "Ring for all", price: 3000, stock: 5 },
  { title: "Wallet", description: "Wallet for all", price: 29, stock: 15 },
];

async function getProducts() {
  const products = await Product.find();
  return products;
}

async function getProductById(productId) {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (err) {
    console.log(err);
  }
}

async function createProduct(product) {
  //insert the product into the database and return that created product
  const newProduct = await Product.create(product)
  return newProduct
}

module.exports = { getProducts, getProductById, createProduct };

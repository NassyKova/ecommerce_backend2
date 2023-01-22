const products = [
  { title: "Bag", description: "Bag for all", price: 42, stock: 10 },
  { title: "Ring", description: "Ring for all", price: 3000, stock: 5 },
  { title: "Wallet", description: "Wallet for all", price: 29, stock: 15 },
];

function getProducts() {
  return products;
}

function getProductById(productId) {
  const product = products[productId];
  return product;
}

module.exports = { getProducts, getProductById };

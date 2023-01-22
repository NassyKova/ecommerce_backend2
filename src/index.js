const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    data: "Data Sent",
  });
});

const products = [
  { title: "Bag", description: "Bag for all", price: 42, stock: 10 },
  { title: "Ring", description: "Ring for all", price: 3000, stock: 5 },
  { title: "Wallet", description: "Wallet for all", price: 29, stock: 15 },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:productId", (req, res) => {
  const product = products[req.params.productId];
  if (!product) {
    res.json({
      data: "Product Not Found",
    });
  }
  res.json(product);
});

app.listen(PORT, () => {
  console.log("Server Started");
});

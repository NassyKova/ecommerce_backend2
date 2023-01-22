const express = require("express");

const { getProducts } = require("./productControllers");

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  const products = getProducts();
  res.json(products);
});

productRouter.get("/:productId", (req, res) => {
  const product = getProductById[req.params.productId];
  if (!product) {
    res.status(404).json({
      data: "Product Not Found",
    });
  }
  res.json(product);
});

module.exports = productRouter;

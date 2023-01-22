const express = require("express");
const productRouter = require("./controllers/products/productRoutes");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    data: "Data Sent",
  });
});

app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log("Server Started");
});

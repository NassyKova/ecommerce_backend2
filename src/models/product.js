const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user_id: String,
  description: String,
});

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  stock: Number,
  reviews: [reviewSchema],
});

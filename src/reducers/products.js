import { createSlice } from "@reduxjs/toolkit";

const productData = [
  { id: 1, title: "bunny", price: 10, emoji: "🐰" },
  { id: 2, title: "bear", price: 20, emoji: "🐻" },
  { id: 3, title: "pup", price: 30, emoji: "🐶" },
  { id: 4, title: "pig", price: 40, emoji: "🐷 " },
];

export const products = createSlice({
  name: "products",
  initialState: productData,
});

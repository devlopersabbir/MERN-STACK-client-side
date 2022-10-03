import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products/product.js";
import connectDB from "./configs/connectMongoDB/connectDB.js";
import authRoutes from "./routes/auth/auth-route.js";
import userRoutes from "./routes/user/userRoutes.js";

// config app
const app = express();
app.use(cors());
dotenv.config();

// fixing "413 Request Entity Too Large" errors
app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);

// all routes
app.use("/api/ecom/v1/product", productRoutes);
// auth routes
app.use("/api/ecom/v1/user", authRoutes);
// user routes
app.use("/api/ecom/v1/users", userRoutes);

// create server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
  connectDB();
});

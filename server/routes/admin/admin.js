import express from "express";

const userRoutes = express.Router();

userRoutes.put("/update/:id", authMiddleware, updateUser);
userRoutes.delete("/delete/:id", authMiddleware, updateUser);
userRoutes.get("/get", authMiddleware, getAllUser);
userRoutes.get("/get/single/:id", authMiddleware, getSingleUser);
userRoutes.put("/change/password/:id", authMiddleware, changePassword);

export default userRoutes;

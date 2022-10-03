import express from "express";
import {
  changePassword,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../../controllers/user/user-controller.js";
import { authMiddleware } from "../../middlewares/user/authMiddleware.js";

const userRoutes = express.Router();

userRoutes.put("/update/:id", authMiddleware, updateUser);
userRoutes.delete("/delete/:id", authMiddleware, deleteUser);
userRoutes.get("/get", authMiddleware, getAllUser);
userRoutes.get("/get/single/:id", authMiddleware, getSingleUser);
userRoutes.put("/change/password/:id", authMiddleware, changePassword);

export default userRoutes;

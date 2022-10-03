import express from "express";
import {
  adminLogin,
  adminSingup,
  loginByEmail,
  loginWithGithubOrGoogle,
  singUpByEmail,
} from "../../controllers/auth/auth-controller.js";

const authRoutes = express.Router();

// for user
authRoutes.post("/auth/new", singUpByEmail);
authRoutes.post("/auth/login", loginByEmail);
authRoutes.post("/auth/social", loginWithGithubOrGoogle);

// for admin
authRoutes.post("/auth/admin/new", adminSingup);
authRoutes.post("/auth/admin/login", adminLogin);

export default authRoutes;

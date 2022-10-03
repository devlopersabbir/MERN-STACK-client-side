import jwt from "jsonwebtoken";
import User from "../../models/user/user-model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const isToken = req.headers.authorization;

    if (!isToken) {
      return res.status(403).json({
        message: "Access not allow!",
      });
    }

    const token = isToken.split(" ")[1];

    const decode = jwt.verify(token, process.env.PRIVET_KEY);
    const id = decode._id;
    const user = await User.findById(id);
    req.user = user;
    // console.log(user);
    next();
  } catch (error) {
    res.status(400).json({
      message: "Authentecation filds!",
    });
  }
};

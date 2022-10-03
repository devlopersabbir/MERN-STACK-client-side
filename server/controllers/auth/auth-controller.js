import User from "../../models/user/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// sing up by email
export const singUpByEmail = async (req, res, next) => {
  const { username, name, email, password, image } = req.body;
  const hassPass = await bcrypt.hash(password, 11);

  const user = await User.findOne({ email });
  if (!user) {
    try {
      const createUser = await User.create({
        username,
        name,
        email,
        password: hassPass,
        image,
        strategy: "email",
        superDefind: "user",
      });
      res.status(201).json({
        message: "User singup successfull!",
        createUser,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong!",
      });
    }
  } else {
    res.status(400).json({
      message: "User already exits!",
    });
  }
};

// login with email
export const loginByEmail = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const isUser = await User.findOne({ username });

    if (!isUser) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    // console.log(password);
    const passCheck = await bcrypt.compare(password, isUser?.password);

    // console.log(passCheck);
    if (!passCheck) {
      return res.status(400).json({
        message: "Password is wrong!",
      });
    }

    const token = await jwt.sign({ _id: isUser._id }, process.env.PRIVET_KEY);

    res.status(200).json({
      message: "Login successfull!",
      token,
      isUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went worng!",
    });
  }
};

// login with github or google
export const loginWithGithubOrGoogle = async (req, res, next) => {
  const { name, email, image, username, id } = req.body;
  // console.log(req.body);
  try {
    const admin = await User.findOne({ email });
    // console.log(admin)
    if (admin) {
      const adminToken = await jwt.sign(
        { _id: admin.id },
        process.env.PRIVET_KEY
      );
      // console.log(adminToken);
      res.status(200).json({
        message: "Account already created!",
        admin,
        adminToken,
      });
    } else {
      // console.log(
      //   "name: ",
      //   name,
      //   "email: ",
      //   email,
      //   "image: ",
      //   image,
      //   "id :",
      //   id
      // );
      const newAdmin = await User.create({
        name,
        email,
        username,
        image: {
          public_id: id,
          url: image,
        },
        strategy: "google",
        superDefind: "admin",
      });
      console.log("from created", newAdmin);
      const adminToken = await jwt.sign(
        { _id: newAdmin._id },
        process.env.PRIVET_KEY
      );

      res.status(201).json({
        message: "Account created successfull!",
        newAdmin,
        adminToken,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went worng!",
    });
    console.log(error);
  }
};

// admin singup with google
export const adminSingup = async (req, res, next) => {
  const { name, email, password } = req.body;
  // console.log(req.body);
  const hassPass = await bcrypt.hash(password, 11);

  const admin = await User.findOne({ email });
  if (!admin) {
    try {
      const createAdmin = await User.create({
        name,
        email,
        password: hassPass,
        strategy: "email",
        superDefind: "admin",
      });
      // console.log(createAdmin);
      res.status(201).json({
        message: "Admin singup successfull!",
        createAdmin,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong!",
        error,
      });
    }
  } else {
    res.status(400).json({
      message: "Admin already exits!",
    });
  }
};

// login with email admin
export const adminLogin = async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(req.body);
  try {
    const admin = await User.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found!",
      });
    }

    // console.log(password);
    const passCheck = await bcrypt.compare(password, admin?.password);

    // console.log(passCheck);
    if (!passCheck) {
      return res.status(400).json({
        message: "Password is wrong!",
      });
    }

    const ifAdmin = admin.superDefind === "admin";
    if (!ifAdmin) {
      return res.status(500).json({
        message: "You are a user. Not admin",
      });
    }

    const adminToken = await jwt.sign(
      { _id: admin._id },
      process.env.PRIVET_KEY
    );

    res.status(200).json({
      message: "Login successfull!",
      adminToken,
      admin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went worng!",
    });
  }
};

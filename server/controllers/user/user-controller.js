import User from "../../models/user/user-model.js";
import bcrypt from "bcrypt";
import cloudinaryv2 from "../../configs/cloudinary/cloudinary.js";

// update user
export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { username, name, email, strategy, superDefind, image } = req.body;

  try {
    const imageUp = await cloudinaryv2.uploader.upload(image, {
      folder: "user",
    });

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        username: username,
        name: name,
        email: email,
        strategy: strategy,
        superDefind: superDefind,
        image: {
          public_id: imageUp.api_key,
          url: imageUp.secure_url,
        },
      },
      { new: true }
    );
    res.status(200).json({
      message: "Profile update successfull!",
      updateUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went worng!",
      error,
    });
  }
};

// delete user
export const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({
      message: "User deleted successfull!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went worng!",
      error,
    });
  }
};

// get all user
export const getAllUser = async (req, res, next) => {
  const { name, username, email } = req.query;
  try {
    let users = [];

    if (name) {
      users = await User.find({ name: { $regex: name, $options: "i" } });
    } else if (username) {
      users = await User.find({
        username: { $regex: username, $options: "i" },
      });
    } else if (email) {
      users = await User.find({ email: { $regex: email, $options: "i" } });
    } else {
      users = await User.find();
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

// get me i mean single user
export const getSingleUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    res.status(200).json({
      message: "User got successfull!",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

// change password
export const changePassword = async (req, res, next) => {
  const id = req.params.id;
  const { password } = req.body;
  // return console.log(password);
  const hassPass = await bcrypt.hash(password, 11);
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const changePass = await User.findByIdAndUpdate(
      id,
      { password: hassPass },
      { new: true }
    );

    res.status(200).json({
      message: "Password change successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      error,
    });
  }
};

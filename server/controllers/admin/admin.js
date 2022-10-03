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

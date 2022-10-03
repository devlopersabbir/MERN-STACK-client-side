import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [false, "You need to must use username!"],
      trim: true,
      unique: [true, "Username already exits"],
      // minLength: [4, "Please add more then 4 character!"],
    },
    name: {
      type: String,
      required: [false, "Youn need to must use name"],
      trim: true,
      default: "",
    },
    email: {
      type: String,
      required: [false, "You need to must use email"],
    },
    strategy: {
      type: String,
      enum: ["google", "github", "email"],
    },
    superDefind: {
      type: String,
      enum: ["user", "admin"],
    },
    password: {
      type: String,
      trim: true,
      required: false,
    },
    image: {
      public_id: {
        type: String,
        default: "12423432412342432",
      },
      url: {
        type: String,
        default:
          "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png",
      },
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;

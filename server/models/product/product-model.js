import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [false, "You need to must add product name!"],
    },
    description: {
      type: String,
      required: [false, "You need to must add product description!"],
    },
    price: {
      type: Number,
      required: [false, "You need to must add product price!"],
    },
    ratings: {
      type: String,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: false,
          // default: "12423432412342432",
        },
        url: {
          type: String,
          required: false,
          // default:
          //   "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png",
        },
      },
    ],
    category: [
      {
        type: String,
        required: [false, "You need to add product category!"],
      },
    ],
    brand: {
      type: String,
      required: false,
    },
    stock: {
      type: Number,
      required: [false, "You need to set product stock"],
      maxLength: [4, "Stock cannot exceed 4 characters"],
    },
    numberOfReview: {
      type: Number,
      default: 0,
    },
    color: [],
    tags: [],
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        name: {
          type: String,
          required: false,
        },
        rating: {
          type: Number,
          required: false,
        },
        comments: {
          type: String,
          required: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);
export default productModel;

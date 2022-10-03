import Product from "../../models/product/product-model.js";
import cloudinaryv2 from "../../configs/cloudinary/cloudinary.js";

// get all product
export const getAllProduct = async (req, res, next) => {
  const { category, q } = req.query;

  try {
    let products = [];
    if (category) {
      products = await Product.find({
        category: { $regex: category, $options: "i" },
      });
    } else if (q) {
      products = await Product.find({
        name: { $regex: q, $options: "i" },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Something went worng!",
      error,
    });
  }
};

// create product
export const createNewProduct = async (req, res, next) => {
  const {
    name,
    description,
    images,
    price,
    brand,
    category,
    stock,
    color,
    tags,
  } = req.body;

  try {
    const imageUp = await cloudinaryv2.uploader.upload(images, {
      folder: "product",
    });
    if (!tags)
      return res.status(400).json({ message: "Tag field is required!" });
    const slplitTags = tags.split(",");

    if (!color)
      return res.status(400).json({ message: "Tag field is required!" });
    const splitColor = color.split(",");

    const createProduct = await Product.create({
      name,
      description,
      images: {
        public_id: imageUp.api_key,
        url: imageUp.secure_url,
      },
      price,
      brand,
      category,
      stock,
      color: splitColor,
      tags: slplitTags,
    });
    res.status(201).json({
      message: "Product created successfull!",
      createProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong!",
      error,
    });
  }
};

// update product
export const updateProduct = async (req, res, next) => {
  const id = req.params.id;

  try {
    const isProduct = await Product.findById(id);
    if (!isProduct) {
      return res.status(404).json({
        message: "Product not found!",
      });
    }

    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "Product update successfull!",
      updateProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      error,
    });
  }
};

// delete product
export const deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const isProduct = await Product.findById(id);
    if (!isProduct) {
      return res.status(404).json({
        message: "Product not found!",
      });
    }

    const product = await Product.findByIdAndDelete(id);

    res.status(200).json({
      message: "Product deleted successfull!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong!",
    });
  }
};

// get single product
export const getSingleProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findOne({ id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

// create new review or update review
export const createProductReview = async (req, res, next) => {
  const productId = req.params.id;
  const { rating, comments } = req.body;
  const reqUserId = req.user._id.toString();

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comments: comments,
  };

  try {
    const product = await Product.findById(productId);

    const isAlreadyReviewd = product.reviews.find((rev) =>
      console.log(rev.user)
    );
    // console.log("revId: ", revId);
    // console.log("requserId : ", reqUserId);
    // === req.user._id.toString()

    if (isAlreadyReviewd) {
      product.reviews.forEach((rev) => {
        (rev.rating = rating), (rev.comments = comments);
      });
      console.log("ji boss true hoiche");
    } else {
      product.reviews.push(review);
      product.numberOfReview = product.reviews.length;
    }

    let avg = 0;

    product.ratings =
      product.reviews.forEach((rev) => {
        avg += rev.rating;
      }) / product.reviews.length;

    const revs = await Product.findByIdAndUpdate(productId, product, {
      new: true,
    });
    res.status(200).json({
      message: "Review success. Thanks for your valueable reviews",
      revs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went worng!",
      error,
    });
  }
};

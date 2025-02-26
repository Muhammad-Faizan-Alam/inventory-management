const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema(
    {
        name: String,
        brand: String,
        price: Number,
        quantity: Number
    }, {
        timestamps: true
    }
);

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   brand: { type: String, required: true },
//   price: { type: Number, required: true },
//   quantity: { type: Number, required: true },
//   category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }, // Foreign key reference
// });

// export default mongoose.models.Product || mongoose.model("Product", productSchema);
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
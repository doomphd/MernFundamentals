const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required : [true, "Title is required"],
        minlength : [1, "Title cannot be blank"]
    },
    price: {
        type: Number,
        required : [true, "Price is required"],
        min : [0, "Price must be a postive value"]
    },
    description: {
        type: String,
        required : [true, "Description is required"],
        minlength : [3, "Description must be at least 3 characters"]
    }
}, {timestamps: true})

const Product = mongoose.model('Product', ProductsSchema)

module.exports = Product
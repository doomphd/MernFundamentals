const mongoose = require('mongoose')

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required : [true, "Set up is required"],
        minlength : [10, "Content must be at least 10 characters"]
    },
    punchline: {
        type: String,
        required : [true, "Punchline is required"],
        minlength : [3, "Stack must be at least 3 characters"]
    }
}, {timestamps: true})

const Jokes = mongoose.model('Jokes', JokesSchema)

module.exports = Jokes
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Quote = new Schema(
    {
        name: { type: String, required: true },
        author: { type: String, required: true },
        quote: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('quotes', Quote)

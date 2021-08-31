const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        name: { type: String, required: true },
        comment: { type: String, required: true },
        quote: [{ type: Schema.Types.ObjectId, ref: 'quotes' }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('comments', Comment)

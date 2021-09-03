const Quote = require('../models/quote');
const Comment = require('../models/comment')
const createQuote = async (req, res) => {
    try {
        const quote = await new Quote(req.body)
        await quote.save()
        return res.status(201).json({
            quote,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find()
        return res.status(200).json({ quotes })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getQuoteById = async (req, res) => {
    try {
        const { id } = req.params;
        const quote = await Quote.findById(id)
        if (quote) {
            return res.status(200).json({ quote });
        }
        return res.status(404).send('Requested Quote not saved.');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteQuote = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Quote.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Quote deleted");
        }
        throw new Error("Quote not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// const updateQuote = async (req, res) => {
//     try {
//         const { id } = req.params;
//         await Quote.findByIdAndUpdate(id, req.body, { new: true }, (err, quote) => {
//             if (err) {
//                 res.status(500).send(err);
//             }
//             if (!quote) {
//                 res.status(500).send('quote not found!');
//             }
//             return res.status(200).json(quote);
//         })
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

//comments

const createComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json({
            comment,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllComments = async (req, res) => {
    try {
        const comment = await Comment.find()
        return res.status(200).json({ comment })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Comment deleted");
        }
        throw new Error("Comment not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    createQuote,
    getAllQuotes,
    getQuoteById,
    deleteQuote,
    createComment,
    getAllComments,
    deleteComment,
    // updateQuote
}

const { Router } = require ('express');
const controllers = require('../controllers')
const router = Router();
// comment
router.get('/', (req, res) => res.send('my root!'))

router.post('/quotes', controllers.createQuote)

router.get('/quotes', controllers.getAllQuotes)

// router.get('/quotes/:id', controllers.getQuoteById)

router.delete('/quotes/:id', controllers.deleteQuote)

// router.put('/quotes/:id', controllers.updateQuote)
//quote

router.post('/comments', controllers.createComment)

router.get('/comments', controllers.getAllComments)

router.delete('/comments/:id', controllers.deleteComment)


module.exports = router;
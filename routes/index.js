const { Router } = require ('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('my root!'))

router.post('/quotes', controllers.createQuote)

module.exports = router;
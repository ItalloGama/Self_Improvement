const { Router } = require ('express');
const router = Router();

router.get('/', (req, res) => res.send('my root!'))

module.exports = router;
const  express = require('express')
const router = express.Router();
const { addToCart, getCart} = require('../cart/cartController')

router.post('/user/add', addToCart)
router.get('/:userId', getCart)

module.exports = router;
const express = require('express')
const router = express.Router();
const productController = require('../products/productController')
const upload = require('../../middlewares/upload')

const auth = require('../../middlewares/auth')


router.get('/', auth, productController.getAllProduct)
router.get('/:id',auth, productController.getproduct)
router.post('/', auth, upload.single('image') , productController.createProduct)
router.put('/:id', upload.single('image'), productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router; 
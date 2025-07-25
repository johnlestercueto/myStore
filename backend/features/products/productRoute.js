const express = require('express')
const router = express.Router();
const productController = require('../products/productController')
const upload = require('../../middlewares/upload')


router.get('/', productController.getAllProduct)
router.get('/:id',productController.getproduct)
router.post('/', upload.single('image') , productController.createProduct)
router.put('/:id', upload.single('image'), productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router;
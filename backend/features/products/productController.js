const productService = require('../products/productService');

exports.getAllProduct = async (req, res) => {
    try {
        const product = await productService.findAllProduct()

        res.status(200).json({
            product
            })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getproduct = async (req, res) => {
    try {
        const product = await productService.findProductById(req.params.id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.createProduct = async (req, res) => {
    
    try {
    const data = req.body;
    console.log('req :', data) //
    
    if(req.file) {
        data.image = req.file.filename;
    }
    const product = await productService.addProduct(data)
    console.log('res :', product) //

    res.status(201).json({
        message: 'product created sucessfully',
        product
    })

    } catch (error) {
        console.log('product controller error :', error) //
        res.status(500).json({ message: error.message });
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const data = req.body;
        if (req.file) {
        data.image = req.file.filename;

   const updated = await productService.updateProduct(req.params.id, data)

   res.status(200).json({
    message: 'product updated sucessfully',
    updated
   })
   }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteProduct = async (req, res) => {
    

    try {
        await productService.deleteProduct(req.params.id)

        res.status(200).json({
            message: 'product deleted sucessfully',
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
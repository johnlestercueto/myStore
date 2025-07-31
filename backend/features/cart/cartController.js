const CartService = require('../cart/cartService')

exports.addToCart = async (req, res) => {
    const {userId, productId, quantity } = req.body;
    
    try {
        const cart = await CartService.addToCart(userId, productId, quantity)
        console.log('res :', cart)
        res.status(200).json(cart);
    } catch (error) {
        console.log('error :', error)
        res.status(500).json({error: error.message });
    }
}

exports.getCart = async (req, res) => {
    try {
        const userId = req.params.userId;
        const cart = await CartService.getCart(userId)
        console.log('res :', cart)
        res.status(200).json(cart)
    } catch (error) {
        console.log('error :', error)
        res.status(500).json({error: error.message})
    }
}
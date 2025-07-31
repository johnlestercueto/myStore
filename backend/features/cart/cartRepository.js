const Cart = require('../cart/cartModel')

class CartRepository {
    async findCartByUserId(userId) {
        return await Cart.findOne({ userId}).populate('products.productId')
    }

    async createCart(userId, product){
        return await Cart.create({userId, products: [product]})
    }

    async updateCart(cart) {
        return await cart.save();
    }
}

module.exports = new CartRepository();
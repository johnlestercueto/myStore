
const CartRepository = require('../cart/cartRepository')

class CartService {
    async addToCart(userId, productId, quantity) {
    try {
      let cart = await CartRepository.findCartByUserId(userId);

      if (!cart) {
        cart = await CartRepository.createCart(userId, { productId, quantity });
      } else {
        const index = cart.products.findIndex((p) => {
          // Handle both populated and unpopulated productId
          const existingProductId =
            typeof p.productId === 'object' && p.productId !== null
              ? (p.productId._id || p.productId).toString()
              : p.productId.toString();

          return existingProductId === productId;
        });

        if (index > -1) {
          cart.products[index].quantity += quantity;
        } else {
          cart.products.push({ productId, quantity });
        }

        await CartRepository.updateCart(cart);
      }

      return cart;
    } catch (error) {
      console.error('Error in addToCart:', error);
      throw error;
    }
  }
    

    async getCart (userId){
        try {
            return CartRepository.findCartByUserId(userId);
        } catch (error) {
            console.log('error :', error)
            throw error; 
        }
    }
}

module.exports = new CartService();
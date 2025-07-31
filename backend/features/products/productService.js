const ProductRepository = require('./productRepository')



class productServices {

    async findAllProduct() {
        return await ProductRepository.findAll();
    }

    async findProductById(id) {
      
        const product = await ProductRepository.findById(id);
        if(!product) throw new Error('product not found')
        return product;
    }
    
    async addProduct(data) {

        return await ProductRepository.create(data)
    }

    async updateProduct(id, data) {


        const product = await ProductRepository.findById(id);
        if(!product) throw new Error('product not found')

        return await ProductRepository.update(id, data)
    }

    async deleteProduct(id) {

        const product = await ProductRepository.findById(id);
        if(!product) throw new Error('product not found')
        
        return await ProductRepository.delete(id)
    }


}

module.exports = new productServices();
const BaseRepository = require('../../utils/BaseRepository');
const ProductModel = require('../products/productModel');

class ProductRepository extends BaseRepository {
    constructor() {
        super(ProductModel);
    }
    
 }

 module.exports = new ProductRepository();
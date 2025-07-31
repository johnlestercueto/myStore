const BaseRepository = require('../../utils/BaseRepository');
const ProductModel = require('./productModel');

class ProductRepository extends BaseRepository {
    constructor() {
        super(ProductModel);
    }
    
 }

 module.exports = new ProductRepository();
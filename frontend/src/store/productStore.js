import { create } from 'zustand';
import * as productServices from '../services/productService';

export const useProductStore = create((set) => ({
    products: [],
    singleProduct: null,
    loading: false,
    error: null,

    addProduct: async (productData) => {
        //console.log('client req :', productData) //
        set({ loading: true});
        try {
            const newProduct = await productServices.createProduct(productData)
            //console.log('server res :', newProduct) //

            
            set((state) => ({
             products: [...state.products, newProduct],
            loading: false
      }));
        return newProduct;
        } catch (err) {
            //console.log('productstore err :', err)
            set({ error: err.message, loading: false });
        }
    },

    getProducts: async () => {
        set({ loading: true })
        try {
            const data = await productServices.getAllProducts()
            set({ products: data, loading: false})
            //console.log('productStore data :', data)
            return data;
        } catch (error) {
            //console.log('productstore error :', error)
            set({ error: error.message, loading: false });
        }
    },

    getSingleProduct: async (id) => {
        set({ loading: true });
        try {
             const data = await productServices.getProductById(id);
             set({ singleProduct: data, loading: false });
             //console.log('store res :', data)
             return data;
         } catch (err) {
            //console.log('productstore error :', err)
             set({ error: err.message, loading: false });
         }
    },


}))


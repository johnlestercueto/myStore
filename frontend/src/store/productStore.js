import { create } from 'zustand';
import * as productServices from '../services/productService';

export const useProductStore = create((set) => ({
    products: [],
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
    }

}))


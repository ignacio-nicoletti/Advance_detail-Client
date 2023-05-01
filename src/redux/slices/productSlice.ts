import { createSlice } from '@reduxjs/toolkit'

export interface Products {


    products: any
    productsStore:any

}


const initialState: Products = {

    products: [],
    productsStore:[]
}




export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        SetProduct: (state, action) => {
            state.products = action.payload.products

        },
        SetProductStore:(state,action)=>{
            state.productsStore=[...state.productsStore,action.payload.productsStore]
        }
    },

})

// Action creators are generated for each case reducer function
export const { SetProduct,SetProductStore } = productSlice.actions

export default productSlice.reducer


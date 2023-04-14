import { createSlice } from '@reduxjs/toolkit'

export interface Products {


    products: {}[]
}


const initialState: Products = {

    products: [],
}




export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        SetProduct: (state, action) => {
            state.products = action.payload.products

        },
    },

})

// Action creators are generated for each case reducer function
export const { SetProduct } = productSlice.actions

export default productSlice.reducer


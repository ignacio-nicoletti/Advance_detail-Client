import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
    auth: string
}


const initialState: CounterState = {
    auth: "",
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SetAuth: (state, action) => {
            state.auth = action.payload
        },
    },

})

// Action creators are generated for each case reducer function
export const { SetAuth } = authSlice.actions

export default authSlice.reducer


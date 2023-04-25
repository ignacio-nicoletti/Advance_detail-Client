import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
    auth: string,
    status:Number
}


const initialState: CounterState = {
    auth: "",
    status:0
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SetAuth: (state, action) => {            
            state.auth = action.payload
            state.status=action.payload.status
        },
    },

})

// Action creators are generated for each case reducer function
export const { SetAuth } = authSlice.actions

export default authSlice.reducer


import { createSlice } from "@reduxjs/toolkit";

export interface Profile {
profile:{}[]
}

const initialState: Profile = {
 profile:[]
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    SetProfile: (state, action) => {
        state.profile = action.payload;
     console.log(action.payload);
     
      
    },
    
  },
});

// Action creators are generated for each case reducer function
export const {SetProfile } = profileSlice.actions;

export default profileSlice.reducer;

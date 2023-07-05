import { ProfileProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

// export interface Profile {
// profile:ProfileProps
// }

const initialState: ProfileProps = {

  name:"",
  lastName:"",
  email:"",
  country:"",
  verify:false
 
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    SetProfile: (state, action) => {
        state = action.payload.profile;
    
     
      
    },
    
  },
});

// Action creators are generated for each case reducer function
export const {SetProfile } = profileSlice.actions;

export default profileSlice.reducer;

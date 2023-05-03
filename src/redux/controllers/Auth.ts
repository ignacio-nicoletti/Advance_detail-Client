import axios from "axios";
import { ClearAuth, SetAuth } from "../slices/authSlice";
import { AppDispatch } from "../store/store";





export const postlogin = (values: any) => async (dispatch: AppDispatch) => {
    try {
      const resp = await axios.post("http://localhost:3000/login", values);
      console.log(resp.data);
      
      localStorage.setItem("token", resp.data.token);
      dispatch(SetAuth({ auth: resp.data,status: resp.status,autorized:true }));
    } catch (err) {
      console.log(err);
    }
  };
  
  
  export const postRegister=(values:any)=>async(dispatch:AppDispatch)=>{
  
    try {
      const resp = await axios.post("http://localhost:3000/register", values);
    
    } catch (error) {
      console.log(error);
    }
  }
  export const clearSession=()=>async(dispatch:AppDispatch)=>{
  
    try {
      dispatch(ClearAuth());
    } catch (error) {
      console.log(error);
    }
  }
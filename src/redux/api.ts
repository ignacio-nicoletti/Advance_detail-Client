import axios from "axios";
import { log } from "console";
import { SetAuth } from "./slices/authSlice";
import { SetProduct } from "./slices/productSlice";
import { AppDispatch } from "./store/store";


export const postlogin = (values: any) => async (dispatch: AppDispatch) => {
  try {
    const resp = await axios.post("http://localhost:3000/login", values);
    console.log(resp.data);
    
    localStorage.setItem("token", resp.data.token);
    dispatch(SetAuth({ auth: resp.data,status: resp.status  }));
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

export const getProduct=(token:any)=>async(dispatch:AppDispatch)=>{

  try {
    const resp = await axios.get("http://localhost:3000/product", { headers: { "user-token": token },});
  
    dispatch(SetProduct({ products: resp.data.products }))
  } catch (error) {
    console.log(error);
  }
}


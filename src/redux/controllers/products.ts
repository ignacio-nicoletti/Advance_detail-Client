import axios from "axios";
import { SetProduct, SetProductStore } from "../slices/productSlice";
import { AppDispatch } from "../store/store";

export const getProduct=(token:any)=>async(dispatch:AppDispatch)=>{

    try {
      const resp = await axios.get("http://localhost:3000/product", { headers: { "user-token": token },});
    
      dispatch(SetProduct({ products: resp.data.products }))
    } catch (error) {
      console.log(error);
    }
  }
  
  
  export const ProductStore=(id:String,count:Number)=>async(dispatch:AppDispatch)=>{
    try {
    dispatch(SetProductStore({productsStore:{id:id,count:count}}))
  } catch (error) {
    console.log(error);
    
  }
  
  }
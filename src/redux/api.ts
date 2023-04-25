import axios from "axios";
import { SetAuth } from "./slices/authSlice";
import { SetProduct } from "./slices/productSlice";
import { AppDispatch } from "./store/store";

export const postlogin = (values: any) => {
    
    console.log(values);
    return async (dispatch: AppDispatch, getState: any,) => {
        // dispatch()
    const resp = await axios.post("http://localhost:3000/login", values
    
    );
    dispatch(SetAuth({ auth: resp.data }));
    localStorage.setItem("token", resp.data.token);
  };
};

export const getProduct = (token: string | null) => {
  console.log(token);

  return async (dispatch: AppDispatch, getState: any) => {
    // dispatch()
    const resp = await axios.get("http://localhost:3000/product", {
      headers: { "user-token": token },
    });

    dispatch(SetProduct({ products: resp.data.products }));
  };
};

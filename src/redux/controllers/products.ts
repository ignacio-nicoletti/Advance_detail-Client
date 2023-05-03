import axios from "axios";
import { SetProduct, SetProductStore } from "../slices/productSlice";
import { AppDispatch } from "../store/store";

export const getProduct = (token: any) => async (dispatch: AppDispatch) => {
  try {
    const resp = await axios.get("http://localhost:3000/product", {
      headers: { "user-token": token },
    });

    dispatch(
      SetProduct({ products: resp.data.products, status: resp.data.status })
    );
  } catch (error: any) {
    dispatch(SetProduct({ products: [], status: error.response.status }));
  }
};

export const ProductStore =
  (id: string, count: number,price:number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetProductStore({ productsStore: { id: id, count: count ,price} }));
    } catch (error) {
      console.log(error);
    }
  };

import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { RootState } from "@/redux/store/store";
import { Product } from "@/types";
import { useState } from "react";
import { useSelector } from "react-redux";

import style from "./carrito.module.css";

interface ProductStoreProps {
  id: string;
  count: number;
  price: number;
}

export default function Carrito() {
  // RENDER INFO
  let productsStore: ProductStoreProps[] = useSelector(
    (state: RootState) => state.product.productsStore
  ); //product in store

  let allProducts: Product[] = useSelector(
    (state: RootState) => state.product.products
  ); //all products

  const StoreProduct: Product[] = allProducts.filter((product) => {
    const idsArray = productsStore.map(({ id }) => id);
    const productFound = productsStore.filter(({ id }) => id === product._id);

    return productsStore.map(({ id }) => id).includes(product._id);
  });

  // RENDER INFO

  let price = productsStore.map(({ price, count }) => price * count);
  let total = 0;
  for (let i = 0; i < price.length; i++) {
    total = total + price[i];
  }

  

  return (
    <div className={style.contain}>
      <Navbar />
      <div className={style.CardContain}>
        {StoreProduct.map((product) => (
          <div className={style.card}>
            <div className={style.info}>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>Marca: {product.brand}</p>
              <p>Material: {product.material}</p>
            </div>
            <div className={style.infoPrice}>
              <div className={style.cant}>
                <p>Unidades</p>
                {/* <p>{count}</p> */}
              </div>
              <div className={style.price}>
                <p>{product.price}$</p>
              </div>
            </div>
          </div>
        ))}
        <div className={style.total}>
          <div className={style.vacio}>{}</div>
          <div className={style.priceT}>
            <p>Total</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

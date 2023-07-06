import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import {
  ProductStore,
  updateStoreWhenRemove,
} from "@/redux/controllers/products";
import { AppDispatch, RootState } from "@/redux/store/store";
import { Product } from "@/types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./carrito.module.css";

interface ProductStoreProps {
  id: string;
  count: number;
  price: number;
  title: string;
  namee: string;
  brand: string;
  description: string;
  material: string;
  dimensions: string;
}

export default function Carrito() {
  const dispatch = useDispatch<AppDispatch>();
  const [total, setTotal] = useState(0);
  const [render, setRender] = useState(true);
  // RENDER INFO
  let productsStore: ProductStoreProps[] = useSelector(
    (state: RootState) => state.product.productsStore
  ); //product in store

  setTimeout(() => {
    let price = productsStore?.map(({ price, count }) => price * count);
    let total1 = 0;
    for (let i = 0; i < price?.length; i++) {
      total1 = total1 + price[i];
    }
    setTotal(total1);
  }, 1000);

  const handlerRemove = (id: string) => {
    let UpdateStore = productsStore.filter((e) => e.id != id);

    dispatch(updateStoreWhenRemove(UpdateStore));
    setRender(!render);
  };

  return (
    <div className={style.contain}>
      <Navbar />
      <div className={style.CardContain}>
        {productsStore.map((product) => (
          <div className={style.card}>
            <div className={style.info}>
              <p>{product?.title}</p>
              <p>{product?.description}</p>
              <p>Marca: {product?.brand}</p>
              <p>Material: {product?.material}</p>
            </div>
            <div className={style.infoPrice}>
              <div className={style.cant}>
                <p>Unidades</p>
                <p>{product?.count}</p>
              </div>
              <div className={style.price}>
                <p>{product?.price}$</p>
                <p className={style.sub}>
                  SubT: ${product?.price * product?.count}
                </p>
              </div>
            </div>
            <div className={style.butonCancell}>
              <p onClick={() => handlerRemove(product.id)}>X</p>
            </div>
          </div>
        ))}

        {total === 0 ? (
          <div className={style.noItems}>
            <p>Aun no hay ningun elemento en el carrito</p>
          </div>
        ) : (
          <div className={style.total}>
            <div className={style.vacio}>{}</div>
            <div className={style.priceT}>
              <p>Total</p>
              <p>$ARG {total}</p>
            </div>
            <div className={style.butonPagar}>
              <p>pagar</p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

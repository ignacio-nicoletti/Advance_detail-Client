import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";

import style from "./carrito.module.css";

export default function Carrito() {
  
// RENDER INFO
  let productsStore = useSelector(
    (state: RootState) => state.product.productsStore
  ); //product in store
  let allProducts = useSelector((state: RootState) => state.product.products); //all products

  let StoreProduct = []; //products filter for mapping

  for (let i = 0; i < productsStore.length; i++) {
    for (let j = 0; j < allProducts.length; j++) {
      if (productsStore[i].id === allProducts[j]._id) {
        StoreProduct.push(allProducts[j]);
    }
    }
  }
// RENDER INFO
  console.log(StoreProduct);

  return (
    <div className={style.contain}>
      <Navbar />
      <div className={style.CardContain}>
        {StoreProduct.map((e: any) => (
          <div className={style.card}>
            <div className={style.info}>
              <p>{e.name}</p>
              <p>{e.description}</p>
              <p>Marca: {e.brand}</p>
              <p>Material: {e.material}</p>
            </div>
            <div className={style.infoPrice}>
              <div className={style.cant}>
                <p>{e.count || "cant"} unidades</p>
              </div>
              <div className={style.price}>
                <p>{e.price}$</p>
              </div>
              {/* modificar */}
            </div>
          </div>
        ))}
        <div className={style.total}>
          <div className={style.vacio}>{/* <p></p> */}</div>
          <div className={style.priceT}>
            <p>Precio</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

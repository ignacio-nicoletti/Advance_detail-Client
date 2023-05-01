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
        StoreProduct.push({
          count: productsStore[i].count,
          product: allProducts[j],
        });//push {count:count, {...}}
      }
    }
  }
  // RENDER INFO

  let total:any = [];
  let suma=0;
  
for (let i = 1; i < total.length; i++) {
 

}
console.log(suma);




  return (
    <div className={style.contain}>
      <Navbar />
      <div className={style.CardContain}>
        {StoreProduct.map((e: any) => (
          <div className={style.card}>
            <div className={style.info}>
              <p>{e.product.name}</p>
              <p>{e.product.description}</p>
              <p>Marca: {e.product.brand}</p>
              <p>Material: {e.product.material}</p>
            </div>
            <div className={style.infoPrice}>
              <div className={style.cant}>
                <p>Unidades</p>
                <p>{e.count}</p>
              </div>
              <div className={style.price}>
                <p>{e.product.price}$</p>
              </div>
            
            </div>
            {total.push(e.count*e.product.price)}
          </div>
        ))}
        <div className={style.total}>
          <div className={style.vacio}></div>
          <div className={style.priceT}>
            <p>Precio</p>
            {




            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

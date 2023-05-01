import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useEffect } from "react";
import { Navbar } from "../components/navbar/navbar";
import style from "../styles/Home.module.css";
import Image from "next/image";
import prueba from "../assets/home/fondo2.jpeg";
import { Counter } from "@/components/Counter/counter";
import { CardProduct } from "@/components/CardProduct/cardProduct";
import { getProduct } from "@/redux/controllers/products";

export default function Home() {
  let token: String | null = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProduct(token));
  }, []);

  let info = useSelector((state: RootState) => state.product.products);


  return (
    <div className={style.home}>
      <Navbar />

      <div>
        <h1>fltros</h1>
        <h1>fltros</h1>
      </div>

      <div className={style.containCards}>
        {info.map((el: any) => (
          <CardProduct
            id={el._id}
            title={el.name}
            description={el.description}
            material={el.material}
            dimensions={el.dimensions}
            brand={el.brand}
            amount={el.amount}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
}

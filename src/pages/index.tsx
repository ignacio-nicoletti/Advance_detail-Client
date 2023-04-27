"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useEffect } from "react";
import { getProduct } from "../redux/api";
import { Navbar } from "../components/navbar/navbar";
import style from "../styles/Home.module.css";
import Image from "next/image";
import prueba from "../assets/home/fondo2.jpeg";
import { Counter } from "@/components/Counter/counter";
import { CardProduct } from "@/components/CardProduct/cardProduct";

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
  console.log(info);

  return (
    <div className={style.home}>
      <Navbar />
      <div className={style.containCards}>
        {info.map((el: any) => (
          <div className={style.card}>
            {/* <div className={style.img}>
              <Image
                src={prueba}
                alt="photo product"
                width={177}
                height={140}
                style={{ }}
                />
            </div>
                <h3>{el.name}</h3>
            <div className={style.info}>
              <p className={style.desc}>{el.description}</p>
              <p><b> Marca:</b> {el.brand}</p>
              <p><b> Material:</b> {el.material}</p>
              <p><b>Cantidad:</b> {el.amount | 0}</p>
              <p>{el.price}$</p>
            </div> */}
                <CardProduct
                title={el.name}
                description={el.description}
                material={el.material}
                dimensions={el.dimensions}
                brand={el.brand}
                amount={el.amount}
                price={el.price}
                />
            <div className={style.buttons}>
              <Counter />
            </div>
           </div>
        ))}
      </div>
    </div>
  );
}

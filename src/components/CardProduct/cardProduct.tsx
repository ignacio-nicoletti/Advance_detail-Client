import { FC, useState } from "react";
import style from "./cardProduct.module.css";
import Image from "next/image";
import prueba from "../../assets/home/fondo2.jpeg";


interface Product {
  title: String;
  amount: Number;
  brand: String;
  description: String;
  material: String;
  price: String;
  dimensions: String;
}

export const CardProduct: FC<Product> = ({
  title,
  amount,
  brand,
  description,
  material,
  price,
}: Product) => {
  const [front, setFront] = useState(true);

  const handlerClick = () => {
    setFront(!front);
  };

  return (
    <>
      {front === true ? (
        <div className={style.card_container} onClick={handlerClick}>
          <div className={style.card}>
            <div className={style.front}>
            <Image
                src={prueba}
                alt="photo product"
                width={177}
                height={140}
                style={{ }}
                />
                <h4>{title}</h4>
                
                <p><i>Marca: </i> {brand || "-"}</p>
                <p>${price}</p>
            </div>
          </div>
        </div>
      ) : front === false ? (
        <div className={style.card_container} onClick={handlerClick}>
          <div className={style.card}>
            <div className={style.back}>
            <p className={style.description}>{description}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

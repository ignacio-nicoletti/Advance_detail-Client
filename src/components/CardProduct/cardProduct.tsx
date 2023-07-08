import { FC, useState } from "react";
import style from "./cardProduct.module.css";
import Image from "next/image";
import prueba from "../../assets/home/fondo2.jpeg";
import { Counter } from "../Counter/counter";

interface Product {
  title: string;
  amount: any;
  brand: string;
  description: string;
  material: string;
  price: number;
  dimensions: string;
  id: string;
}

export const CardProduct: FC<Product> = ({
  title,
  amount,
  brand,
  description,
  material,
  price,
  dimensions,
  id,
}: Product) => {
  const [front, setFront] = useState(true);

  const handlerClick = () => {
    setFront(!front);
  };

  return (
    <>
      <div className={style.card_container}>
        {front === true ? (
          <div className={style.front}>
            <Image
              src={prueba}
              alt="photo product"
              style={{
                width: "100%",
                height: "50%",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <div className={style.description}>
              <h5 className={style.title}>{title}</h5>

              <p>
                <b>Marca: </b> {brand || "-"}
              </p>
              <p>Stock: {amount || "-"}</p>
              <p>${price}</p>
            </div>

            <button className={style.masInfo} onClick={handlerClick}>
              ver mas
            </button>
            <Counter
              id={id}
              amount={amount}
              price={price}
              title={title}
              brand={brand}
              description={description}
              material={material}
              dimensions={dimensions}
            />
          </div>
        ) : front === false ? (
          <div className={style.back}>
            <Image
              src={prueba}
              alt="photo product"
              style={{
                width: "100%",
                height: "50%",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <div className={style.description}>
              <p>{description}</p>
              <p>Medidas: {dimensions || "-"}</p>
              <p>Material: {material}</p>
              <p>Stock:{amount}</p>
            </div>

            <button className={style.masInfo} onClick={handlerClick}>
              ver Menos
            </button>

            <Counter
              id={id}
              amount={amount}
              price={price}
              title={title}
              brand={brand}
              description={description}
              material={material}
              dimensions={dimensions}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

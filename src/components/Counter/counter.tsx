import { ProductStore } from "@/redux/controllers/products";
import { AppDispatch } from "@/redux/store/store";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./counter.module.css";

interface counter {
  id: string;
  amount: number;
  price: number;
  title: string;
  brand: string;
  description: string;
  material: string;
  dimensions: string;
}

export const Counter: FC<counter> = ({
  id,
  amount,
  price,
  title,
  brand,
  description,
  material,
  dimensions,
}: counter) => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch<AppDispatch>();

  const handlerStore = () => {
    dispatch(
      ProductStore(
        id,
        count,
        price,
        title,
        brand,
        description,
        material,
        dimensions
      )
    );
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  let activeDec = false;
  let activeInc = false;
  count == 0 ? (activeDec = true) : "";
  count == amount ? (activeInc = true) : "";

  return (
    <>
      <div className={styles.contain}>
        <div className={styles.counter}>
          <button
            className={styles.button}
            onClick={decrement}
            disabled={activeDec}
          >
            -
          </button>
          <h5 className={styles.count}>{count}</h5>
          <button
            className={styles.button}
            onClick={increment}
            disabled={activeInc}
          >
            +
          </button>
        </div>
        <button
          className={styles.sum}
          onClick={handlerStore}
          disabled={count === 0}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

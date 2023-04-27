import React, { FC, useState } from "react";
import styles from "./counter.module.css";

export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  let active = false;
  count === 0 ? (active = true) : "";

  return (
    <>
      <div className={styles.contain}>
        <div className={styles.counter}>
          <button
            className={styles.button}
            onClick={decrement}
            disabled={active}
          >
            -
          </button>
          <h5 className={styles.count}>{count}</h5>
          <button className={styles.button} onClick={increment}>
            +
          </button>
        </div>
        <button className={styles.sum}>Agregar al carrito</button>
      </div>
    </>
  );
};

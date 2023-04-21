import { FC } from "react";
import style from "./CarPasos.module.css";
interface Card {
  informacion: [];
}

export const CardPasos: FC<Card> = ({ informacion }: Card) => {
  return (
    <div className={style.pasos}>
      {informacion.map((e: any) => (
        <div className={style.card} key={e}>
          <h6>{e.title}</h6>

          <p>{e.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

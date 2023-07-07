import { FC } from "react";
import style from "./CarPasos.module.css";

export const CardPasos: FC = () => {
  let infoCard: object[] = [
    {
      id: 1,
      title: "Lavado completo y limpieza profunda",
      descripcion:
        "Se realiza una limpieza profunda del interior y exterior del vehículo: carrocería, llantas ,pasaruedas e insignias."
    },
    {
      id: 2,
      title: "Descontaminado de Carrocería (Claybar)",
      descripcion:
        "El siguiente paso es la descontaminación de carrocería, vidrios y opticas utilizando Claybar. ¿Por qué es importante este proceso? Con el tiempo, la pintura de tu vehículo puede ponerse ligeramente áspera al tacto, esto se debe a la acumulación gradual de diferentes contaminantes de las superficies, los cuales se adhieren de tal forma que no es posible eliminarlos por el lavado común. Por eso, este paso es indispensable para que el tratamiento sea absorbido por la pintura."
    },
    {
      id: 3,
      title: "Pulido y corrección de barniz o laca",
      descripcion:
        "Una vez que el vehículo se encuentre en condiciones óptimas para comenzar con el tratamiento pasaremos al pulido en tres fases: La primera (corte) elimina rasguños y pinturas automotrices aplicadas en fábrica, arañazos y otros defectos. La segunda busca eliminar aquellas imperfecciones que quedan luego de la primera etapa, dejando una superficie uniforme. Por último y no menos importante la tercer etapa, que busca mejorar el color y el brillo dando profundidad.",
    },
    {
      id: 4,
      title: "Hidratación de plásticos exteriores",
      descripcion:
        "En esta etapa se busca la restauración completa de los plásticos del vehículo, aplicando diferentes productos que logran su propósito.",
    },
    {
      id: 5,
      title: "Detallado de insignias",
      descripcion:
        "Este paso incluye el cromado y pulido de piezas metálicas y aluminio del exterior del vehículo.",
    },
    {
      id: 6,
      title: "Sellado y limpieza de cristales",
      descripcion:
        "Aquí haremos la limpieza de vidrios y ópticas, para dejarlos brillosos y libres de cualquier mancha de insectos, residuos de árboles o animales y en general del sarro proveniente del agua de lluvia para luego el sellado de los mismos.",
    },
    {
      id: 7,
      title: "Sellado y Abrillantado de plásticos interiores y exteriores",
      descripcion:
        "Este último paso le devolverá el brillo a los parachoques, gomas, protectores laterales o cualquier superficie plástica que se encuentre en el exterior o interior del vehículo. La aplicación del sellador permitirá realzar el color y aumentar el brillo, prolongar el lavado y proteger al vehículo de los factores climáticos.",
    },
  ];

  return (
    <div className={style.pasos}>
      {infoCard.map((e: any) => (
        <div className={style.card} key={e}>
          <h6>{e.title}</h6>

          <p>{e.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

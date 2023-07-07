import { CardPasos } from "@/components/CarPasos/CarPasos";
import { Navbar } from "@/components/navbar/navbar";
import { FooterLanding } from "../landingpage/FooterLanding/footerLanding";
import style from "./tratamientos.module.css";

export default function Tratamiento() {


  return (
    <div className={style.tratamientoContain}>
      <Navbar />
      <div className={style.informacionContain}>
        <h2>Tratamientos</h2>

        <div className={style.tratamientoBox}>
          <ul>
            <li>
              <h3>Ceramicos</h3>
            </li>
          </ul>
          <p>
            Es un tratamiento avanzado destinado a la protección y abrillantado
            de todo tipo de superficies de vehículos como coches, motos,
            embarcaciones, aviones, etc. Posee una mayor dureza y durabilidad a
            diferencia del tratamiento acrílico.
          </p>
        </div>

        <div className={style.tratamientoBox}>
          <ul>
            <li>
              <h3>Acrílicos</h3>
            </li>
          </ul>
          <p>
            Este tratamiento consiste en la aplicación de una película
            protectora a base de acrílico, que permitirá un proceso de
            descontaminación de la pintura, seguido por un sistema de pulido,
            lustre, abrillantado, encerado y sellado con Cera de Carnauba, dando
            como resultado un acabado final de excelencia, protección contra los
            rayos UV y la contaminación, dejando una mayor profundidad en el color y
            brillo de la pintura.
          </p>
        </div>
        <div className={style.tratamientoBox}>
          <ul>
            <li>
              <h3>Abrillantado</h3>
            </li>
          </ul>
          <p>
            Por último el tratamiento abrillantado esta destinado al pulido de  la laca, buscando la corrección de imperfecciones y
            obteniendo el mayor brillo posible.
          </p>
        </div>

        <div className={style.pasos}>
          <h4>Pasos que se realizan en un tratamiento</h4>
          <CardPasos/>
        </div>
      </div>
      <FooterLanding />
    </div>
  );
}

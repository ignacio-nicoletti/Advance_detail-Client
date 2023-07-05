import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import Image from "next/image";
import style from "./trabajos.module.css";
import interior from "../../assets/trabajos/limpiezaTapizado.png";
import ceramico from "../../assets/trabajos/ceramico.jpg";
import acrilico from "../../assets/trabajos/acrilico2.jpg";
import { Carousel } from "@/components/carousel/Carousel";
// import Carousel from "../../components/carousel/carousel";

import acrilico2 from "../../assets/trabajos/acrilico2.jpg";
import acrilico3 from "../../assets/trabajos/acrilico2.jpg";
import acrilico4 from "../../assets/trabajos/acrilico2.jpg";
import acrilico5 from "../../assets/trabajos/acrilico2.jpg";
import acrilico6 from "../../assets/trabajos/acrilico2.jpg";
import acrilico7 from "../../assets/trabajos/acrilico2.jpg";
import acrilico8 from "../../assets/trabajos/acrilico2.jpg";
import acrilico9 from "../../assets/trabajos/acrilico2.jpg";
import acrilico10 from "../../assets/trabajos/acrilico2.jpg";
import acrilico11 from "../../assets/trabajos/acrilico2.jpg";
import acrilico12 from "../../assets/trabajos/acrilico2.jpg";
import acrilico13 from "../../assets/trabajos/acrilico2.jpg";
import acrilico14 from "../../assets/trabajos/acrilico2.jpg";
import acrilico15 from "../../assets/trabajos/acrilico2.jpg";
import acrilico16 from "../../assets/trabajos/acrilico2.jpg";
import acrilico17 from "../../assets/trabajos/acrilico2.jpg";
import acrilico18 from "../../assets/trabajos/acrilico2.jpg";
import acrilico19 from "../../assets/trabajos/acrilico2.jpg";
import acrilico20 from "../../assets/trabajos/acrilico2.jpg";
import acrilico21 from "../../assets/trabajos/acrilico2.jpg";
import acrilico22 from "../../assets/trabajos/acrilico2.jpg";
import acrilico23 from "../../assets/trabajos/acrilico2.jpg";
import acrilico24 from "../../assets/trabajos/acrilico2.jpg";
import acrilico25 from "../../assets/trabajos/acrilico2.jpg";
import { CardPasos } from "@/components/CarPasos/CarPasos";
import { FooterLanding } from "../landingpage/FooterLanding/footerLanding";

export default function trabajos() {
  const imagesImp: any = [ceramico, acrilico];

  let imagesGallery: any = [
    ceramico,
    acrilico,
    acrilico2,
    acrilico3,
    acrilico4,
    acrilico5,
    acrilico6,
    acrilico7,
    acrilico8,
    acrilico9,
    acrilico10,
    acrilico11,
    acrilico12,
    acrilico13,
    acrilico14,
    acrilico15,
    acrilico16,
    acrilico17,
    acrilico18,
    acrilico19,
  ];

  let infoCard: any = [
    {
      id: 1,
      title: "Lavado completo y limpieza profunda",
      descripcion:
        "Se realiza una limpieza profunda del interior y exterior del vehículo: carrocería, llantas y pasaruedas, guardabarros, insignias y un aspirado interior detallado.",
    },
    {
      id: 2,
      title: "Descontaminado de Carrocería (Claybar)",
      descripcion:
        "El siguiente paso es la descontaminación de carrocería, vidrios y focos utilizando Claybar.¿Por qué es importante este proceso? Con el tiempo, la pintura de tu vehículo puede ponerse ligeramente áspera al tacto, esto se debe a la acumulación gradual de diferentes contaminantes de las superficies, los cuales se adhieren de tal forma que no es posible eliminarlos por el lavado común. Por eso, este paso es indispensable para que el tratamiento sea absorbido por la pintura.",
    },
    {
      id: 3,
      title: "Pulido y corrección de barniz o laca + Abrillantado",
      descripcion:
        "Una vez que el vehículo se encuentre en condiciones óptimas para comenzar con el tratamiento pasaremos al pulido en dos fases: la primera elimina rasguños y pinturas automotrices aplicadas en fábrica, arañazos y otros defectos que no requieran lijado; la segunda es mejorar el color y realzar el brillo dando profundidad.Además, realizamos la corrección y eliminación a máquina de las Swirl Mark con la línea de polishing Menzerna, pulido y lustrado íntegro.",
    },
    {
      id: 4,
      title: "Hidratación de plásticos exteriores",
      descripcion:
        "Nuevamente, pasamos al lavado por completo del vehículo, pero esta vez con Shampoo neutro de SONAX. Este paso retira residuos que pueden llegar a quedar en el proceso anterior.Además, es aquí donde realizaremos la hidratación de plásticos exteriores.",
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
        "Aquí haremos el sellado y limpieza de vidrios y ópticas, para dejarlos brillosos y libres de cualquier mancha de insectos, residuos de árboles o animales.",
    },
    {
      id: 7,
      title: "Sellado y Abrillantado de plásticos interiores y exteriores",
      descripcion:
        "Este último paso le devolverá el brillo a los parachoques, gomas, protectores laterales o cualquier superficie plástica que se encuentre en el exterior o interior del vehículo.La aplicación del sellador permitirá realzar el color y aumentar el brillo, prologar el lavado y proteger al vehículo de los factores climáticos.",
    },
  ];

  return (
    <div className={style.contain}>
      <Navbar />
      <div className={style.tratamientos}>
        <h2>Tramientos</h2>
        <h3> Ceramicos</h3>
        <div className={style.tratamientoBox}>
          <p>
            Es un tratamiento avanzado destinado a la protección y abrillantado
            de todo tipo de superficies de vehículos como coches, motos,
            embarcaciones, aviones, etc. Posee una mayor dureza y durabilidad a
            diferencia del tratamiento acrilico.
          </p>

          <div>
            <Carousel imagesImp={imagesImp} imagesGallery={imagesGallery} />
          </div>
        </div>

        <h3>Acrilicos </h3>
        <div className={style.serviceBox}>
          <p>
            Este tratamiento consiste en la aplicación de una película
            protectora a base de acrílico, que permitirá un proceso de
            descontaminación de la pintura, seguido por un sistema de pulido,
            lustre, abrillantado, encerado y sellado con Cera de Carnauba, dando
            como resultado un acabado final de excelencia, protección contra los
            rayos UV y la contaminación, y mayor profundidad en el color y
            brillo de la pintura.
          </p>
          <Carousel imagesImp={imagesImp} imagesGallery={imagesGallery} />
        </div>
        <h3>Integral </h3>
        <div className={style.serviceBox}>
          <p>
            Es un tratamiento avanzado destinado a la protección y abrillantado
            de todo tipo de superficies de vehículos como coches, motos,
            embarcaciones, aviones, etc.
          </p>
          <Carousel imagesImp={imagesImp} imagesGallery={imagesGallery} />
        </div>
        <h3>Pasos a seguir</h3>

        <CardPasos informacion={infoCard} />
      </div>

      <div className={style.lav}>
        <h2>Lavados</h2>
        <div className={style.lavBox}>
          <p>
            Servicio de limpieza y detallados del vehículos que se realiza con
            productos y técnicas de alta calidad. Dentro de esta categoria
            ofrecemos dos tipos de lavados: Basico y premium. <br /> El lavado
            basico se comienza con la limpieza de los pasaruedas pasando luego a
            la limpieza de la carroceria, luego en el interior se realiza el
            lavado de alfombras y se procede a aspirar y limpiar con microfibra
            y finalizando el lavado con limpieza de vidrios. <br /> El lavado
            premium al igual que el basico se limpian los pasaruedas, cubiertas
            y llantas enjuague al chasis y lavado de carroceria. En el
            interior,lavado de alfombras aspirado y utilizacion de pinceles para
            sacar el mayor polvo posible terminando con una limpieza de vidrios
            y encerado del vehiculo.
          </p>
          <Carousel imagesImp={imagesImp} imagesGallery={imagesGallery} />
        </div>
      </div>

      <div className={style.interiores}>
        <h2>Interiores</h2>
        <div className={style.int}>
          <p>
            Servicio de limpieza y detallados del vehículos que se realiza con
            productos y técnicas de alta calidad. Dentro de esta categoria
            ofrecemos dos tipos de lavados: Basico y premium. <br /> El lavado
            basico se comienza con la limpieza de los pasaruedas pasando luego a
            la limpieza de la carroceria, luego en el interior se realiza el
            lavado de alfombras y se procede a aspirar y limpiar con microfibra
            y finalizando el lavado con limpieza de vidrios. <br /> El lavado
            premium al igual que el basico se limpian los pasaruedas, cubiertas
            y llantas enjuague al chasis y lavado de carroceria. En el
            interior,lavado de alfombras aspirado y utilizacion de pinceles para
            sacar el mayor polvo posible terminando con una limpieza de vidrios
            y encerado del vehiculo.
          </p>
          <Carousel imagesImp={imagesImp} imagesGallery={imagesGallery} />
        </div>
      </div>
      <div className={style.motores}>
        <h2>Motores</h2>
        <div className={style.motor}>
          <p>
            Servicio de limpieza y detallado de todos los elementos que se
            encuentran dentro del vano-motor, incluyendo carroceria, es decir,
            capot.
          </p>
          <Carousel imagesImp={imagesImp} imagesGallery={imagesGallery} />
        </div>
      </div>
      <FooterLanding />
    </div>
  );
}

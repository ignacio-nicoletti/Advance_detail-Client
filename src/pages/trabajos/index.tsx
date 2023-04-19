import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import Image from "next/image";
import style from "./trabajos.module.css";
import interior from "../../assets/trabajos/limpiezaTapizado.png";
import ceramico from "../../assets/trabajos/ceramico.jpg";
import acrilico from "../../assets/trabajos/acrilico2.jpg";
import { Carousel } from "@/components/carousel/Carousel";
// import Carousel from "../../components/carousel/carousel";

export default function trabajos() {

  const images:any = [
    ceramico,
    acrilico,
   
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
            embarcaciones, aviones, etc. Posee una mayor dureza y durabilidad
            que el tratamineto acrilico.
          </p>

          <div>
            <Carousel images={images}/>
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
          <Carousel images={images}/>
        </div>
        <h3>Integral </h3>
        <div className={style.serviceBox}>
          <p>
            Es un tratamiento avanzado destinado a la protección y abrillantado
            de todo tipo de superficies de vehículos como coches, motos,
            embarcaciones, aviones, etc.
          </p>
          <Carousel images={images}/>
        </div>
        <h3>Pasos a seguir</h3>
        <div className={style.pasos}>
          <div className={style.boxPasos}>
            <p>Lavado completo y limpieza profunda</p>
          </div>
          <div className={style.boxPasos}>
            <p>Descontaminado de Carrocería (Claybar)</p>
          </div>
          <div className={style.boxPasos}>
            <p>Pulido y corrección de barniz o laca + Abrillantado</p>
          </div>
          <div className={style.boxPasos}>
            <p>Hidratación de plásticos exteriores</p>
          </div>
          <div className={style.boxPasos}>
            <p>Detallado de insignias</p>
          </div>
          <div className={style.boxPasos}>
            <p>Sellado y limpieza de cristales</p>
          </div>
          <div className={style.boxPasos}>
            <p>Sellado y Abrillantado de plásticos interiores y exteriores</p>
          </div>
        </div>
      </div>
      <div className={style.lav}>
        <h3>Lavados</h3>
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
          <Image
            src={ceramico}
            alt="Logo advance_detailer"
            width={150}
            height={150}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>

      <div className={style.interiores}>
        <h3>Interiores</h3>
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
          <Image
            src={ceramico}
            alt="Logo advance_detailer"
            width={150}
            height={150}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <div className={style.motores}>
        <h3>Motores</h3>
        <div className={style.motor}>
          <p>
            Servicio de limpieza y detallado de todos los elementos que se
            encuentran dentro del vano-motor, incluyendo carroceria, es decir,
            capot.
          </p>
          <Image
            src={ceramico}
            alt="Logo advance_detailer"
            width={150}
            height={150}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

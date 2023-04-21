import { Navbar } from "@/components/navbar/navbar";
import style from "./landingPage.module.css";

import pincelVolante from "../../assets/pincelVolante.png";
import tapizado from "../../assets/trabajos/limpiezaTapizado.png";
import pulidora2 from "../../assets/pulidora2.jpeg";

import ceramico from "../../assets/landing/ceramico2.jpg";
import lavado from "../../assets/landing/lavado.jpg";
import interior from "../../assets/landing/interior.jpg";

import Image from "next/image";
import { CardMember } from "@/components/CardMember/cardMember";
import { Footer } from "@/components/Footer/footer";
import "./landingPage.module.css";
import Link from "next/link";



export default function LandingPage() {
  return (
    <div className={style.landing}>
      <Navbar />
      <h1>
        ¡¡TU VEHICULO <br /> DEJALO COMO NUEVO!!
      </h1>
      {/* seccion tratamientos */}
      <div className={style.services}>
        <h3>Tratamientos</h3>
        <div className={style.serviceBox}>
          <Image
            src={ceramico}
            alt="Logo advance_detailer"
            width={150}
            height={150}
            style={{ borderRadius: "10px" }}
          />
          <p>
            Proceso mediante el cual se afina la superficie del vehiculos,
            eliminando marcas, roces, rayadura, previo a este proceso se prepara
            la superficie para pulir. Posterior al proceso se la prepara para
            ser sellada.
          </p>
        </div>
        <h3>Lavados</h3>
        <div className={style.serviceBox}>
          <Image
            src={lavado}
            alt="Logo advance_detailer"
            width={150}
            height={150}
            style={{ borderRadius: "10px" }}
          />
          <p>
            Servicio de limpieza y detallados del vehículos que se realiza con
            productos y técnicas de alta calidad. Dentro de esta categoria
            ofrecemos dos tipos de lavados: Basico y premium.
          </p>
        </div>
        <h3>Interiores</h3>
        <div className={style.serviceBox}>
          <Image
            src={interior}
            alt="Logo advance_detailer"
            width={150}
            height={150}
            style={{ borderRadius: "10px" }}
          />
          <p>
            En este servicio ofrecemos la posibilidad de descontaminar
            absolutamente todo el interior de su vehiculo. Desde polvo y
            suciedad hasta manchas dentro del habitaculo.
          </p>
        </div>
        <Link href="/trabajos">
          <button>Ver mas servicios </button>
        </Link>
      </div>

      {/* seccion quienes somos */}

      <div className={style.about}>
     
        <h2 id="about">¿Quienes somos?</h2>
        <div className={style.box1}>
          <p>
            Nuestro equipo está compuesto por especialistas en diferentes
            áreas del detailing automotor, como lavado y encerado, limpieza de
            interiores, pulido y abrillantado de carrocería, tapicería, entre
            otros, contando con las últimas técnicas y tendencias del mercado
            asegurando éxito general del proceso al detalle.
          </p>

          <Image
            src={tapizado}
            alt="Logo advance_detailer"
            width={150}
            height={150}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className={style.box2}>
          <Image
            src={pincelVolante}
            alt="Logo advance_detailer"
            width={150}
            height={150}
            style={{ borderRadius: "10px" }}
          />
          <p>
            Tratamiento el cual consiste en el descontaminado completo del
            vehiculo, comenzando por el chasis, interior y pintura. restauracion
            / reacondicionamiento del interior y pulido al detalle de la pintura
            siendo luego cubierta por un tratamiento acrilico o ceramico.
          </p>
        </div>
        <div className={style.box3}>
          <p>
            Nuestra misión como equipo es brindar servicios de alta calidad y
            mejorar la apariencia y el estado de los vehículos superando las
            expectativas de nuestros clientes.
          </p>

          <Image
            src={pulidora2}
            alt="Logo advance_detailer"
            width={150}
            height={150}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>

      <CardMember />

      <Footer />
    </div>
  );
}

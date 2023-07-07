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
import { FooterLanding } from "./FooterLanding/footerLanding";
import logoadvance from "../../assets/landing/logoAdvance.png";

export default function LandingPage() {
  return (
    <div className={style.landing}>
      <Navbar />
      <div className={style.titleContain}>
        <div className={style.logo}>
          <Image
            src={logoadvance}
            alt="Logo advance_detailer"
            style={{
              marginTop: "10%",
              width: "30%",
              height: "50%",
            }}
          />
        </div>

        <h1>DEJALO COMO NUEVO!!</h1>

        <p>
          Somos Advance Detailer, nos dedicamos a renovar tu vehiculo y dejarlo
          como siempre <br /> quisiste tenerlo. para lograrlo te ofrecemos lo
          siguiente...
        </p>
      </div>
      {/* seccion tratamientos */}
      <div className={style.servicesContain}>
        <div className={style.serviceBox}>
          <h2>Tratamientos</h2>

          <div className={style.informacion}>
            <Image
              src={ceramico}
              alt="Logo advance_detailer"
              style={{
                width: "40%",
                height: "100%",
              }}
            />

            <p>
              Proceso mediante el cual se afina la superficie del vehiculos,
              eliminando marcas, roces, rayadura, previo a este proceso se
              prepara la superficie para pulir. Posterior al proceso se la
              prepara para ser sellada.
            </p>
          </div>
        </div>

        <div className={style.serviceBox}>
          <h2>Lavados</h2>

          <div className={style.informacion}>
            <Image
              src={lavado}
              alt="Logo advance_detailer"
              style={{
                width: "40%",
                height: "100%",
              }}
            />
            <p>
              Servicio de limpieza y detallados del vehículos que se realiza con
              productos y técnicas de alta calidad. Dentro de esta categoria
              ofrecemos dos tipos de lavados: Basico y premium.
            </p>
          </div>
        </div>

        <div className={style.serviceBox}>
          <h2>Interiores</h2>

          <div className={style.informacion}>
            <Image
              src={interior}
              alt="Logo advance_detailer"
              style={{
                width: "40%",
                height: "100%",
              }}
            />
            <p>
              En este servicio ofrecemos la posibilidad de descontaminar
              absolutamente todo el interior de su vehiculo. Desde polvo y
              suciedad hasta manchas dentro del habitaculo.
            </p>
          </div>
        </div>
        <div className={style.buttonService}>
          <Link href="/trabajos">
            <button id="about">Ver mas servicios </button>
          </Link>
        </div>
      </div >

      {/* seccion quienes somos */}

      <div  className={style.about}>
        <h2 >¿Quienes somos?</h2>
        <div className={style.textAbout}>
          <p>
            Nuestro equipo está compuesto por especialistas en diferentes áreas
            del detailing automotor, como lavado y encerado, limpieza de
            interiores, pulido y abrillantado de carrocería, tapicería, entre
            otros, contando con las últimas técnicas y
          </p>
          <p>
            tendencias del mercado asegurando éxito general del proceso al
            detalle. Nuestra misión como equipo es brindar servicios de alta
            calidad y mejorar la apariencia y el estado de los vehículos
            superando las expectativas de nuestros clientes.
          </p>
        </div>
      </div>
      <CardMember />

      <FooterLanding />
    </div>
  );
}

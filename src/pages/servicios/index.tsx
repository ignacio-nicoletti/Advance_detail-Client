import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import Link from "next/link";
import { FooterLanding } from "../landingpage/FooterLanding/footerLanding";
import style from "./servicios.module.css";

export default function Servicios() {
  return (
    <div className={style.serviciosContain}>
      <Navbar />
      <div className={style.grillaService}>
        <div className={style.title}>
          <h3>
            Con nuestro equipo de trabajo ofrecemos los siguientes servicios
          </h3>
        </div>
        <div className={style.lavados}>
          <h4>Lavados</h4>
          <ul>
            <li>Lavados y detalles de interiores.</li>
            <li>Lavados premium.</li>
          </ul>
          <span>
            Servicio de limpieza y detallados del vehículos que se realiza con
            productos y técnicas de alta calidad. Dentro de esta categoria
            ofrecemos dos tipos de lavados: Basico y premium. <br /> El lavado
            basico se comienza con la limpieza de los pasaruedas pasando luego a
            la limpieza de la carroceria, luego en el interior se realiza el
            lavado de alfombras y se procede a aspirar y limpiar con microfibra
            y finalizando el lavado con limpieza de vidrios. <br /> El lavado
            premium al igual que el basico se limpian los pasaruedas, cubiertas
            y llantas enjuague al chasis y lavado de carroceria. En el interior,
            lavado de alfombras aspirado y utilizacion de pinceles para sacar el
            mayor polvo posible terminando con una limpieza de vidrios y
            encerado del vehiculo.
          </span>
        </div>
        <div className={style.tratamientos}>
          <h4>Tratamientos</h4>
          <ul>
            <li>Tratamientos cerámicos.</li>
            <li>Tratamientos acrílicos.</li>
            <li>Tratamientos abrillantados.</li>
          </ul>

          <Link href="/tratamientos">
            <p>Mas Informacion</p>
          </Link>
        </div>
        <div className={style.otrosService}>
          <p>• Saca bollos.</p>
          <p>• Restauración de ópticas y tableros.</p>
          <p>• Tratado y restauración de llantas, pintura.</p>
          <p>• Colocación de polarizados y antivandálicos.</p>
          <p>• Tapicería general y restauración.</p>
          <p>
            • Distribuidor oficial de productos para detailing Acrochemical.
          </p>
          <p>• Distribuidores oficial de productos para detailing Glänzen.</p>
          <p>• Detallado de vano-motor y sus elementos.</p>
        </div>
      </div>

    
      <FooterLanding />
    </div>
  );
}

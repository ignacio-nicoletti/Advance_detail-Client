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
import { Counter } from "@/components/Counter/counter";
import CounterGallery from "@/components/counterGallery/counterGallery";

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

  return (
    <div className={style.contain}>
      <Navbar />

      {/* <Carousel imagesImp={imagesImp} imagesGallery={imagesGallery} /> */}

      <div className={style.photoContain}>
        <p>Tratramientos</p>
        <div className={style.photo}>
          {imagesGallery.map((e: any) => (
            <Image
              src={e}
              alt="carousel current slide"
              width={100}
              height={100}
              style={{ borderRadius: "5px" }}
            />
          ))}

          <CounterGallery />
        </div>
      </div>
      <div className={style.photoContain}>
        <p>Lavados</p>
        <div className={style.photo}>
          {imagesGallery.map((e: any) => (
            <Image
              src={e}
              alt="carousel current slide"
              width={100}
              height={100}
              style={{ borderRadius: "5px" }}
            />
          ))}

          <CounterGallery />
        </div>
      </div>

      <FooterLanding />
    </div>
  );
}

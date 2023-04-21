import { FC } from "react";
import style from "./footer.module.css";
import instagramIcon from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import Image from "next/image";
import gyeon from "../../assets/Footer/gyeon.png";
import glanzen from "../../assets/Footer/glanzen.png";
import advance from "../../assets/Footer/advanceLogo.png"

export const Footer: FC = () => {
  return (
    <> 
      <div className={style.contain_C}>
        <div className={style.slider}>
          <div className={style.slide_track}>
            <div className={style.slide}>
              <Image
                src={gyeon}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={glanzen}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={advance}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={gyeon}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={glanzen}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={advance}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={gyeon}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={glanzen}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={advance}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={gyeon}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={glanzen}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={advance}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={gyeon}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={style.slide}>
            <Image
                src={glanzen}
                alt="Logo advance_detailer"
                width={50}
                height={50}
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div>
          <p>
            {/* No dudes en consultar{' '} */}
            La plata, Buenos Aires
          </p>
        </div>
        <span className={style.copyrigth}>© Advance_detailer</span>
        <div className={style.socialMedia}>
          <a
            href="https://www.instagram.com/advance_detailer/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={instagramIcon} alt="Instagram" width={25} height={25} />
          </a>
          <a href="https://wa.me/2216039244" target="_blank" rel="noreferrer">
            <Image src={whatsapp} alt="Instagram" width={25} height={25} />
          </a>
        </div>
      </div>
    </>
  );
};

import { FC, useState } from "react";
import { useRouter } from "next/router";
import style from "./navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { clearSession } from "@/redux/controllers/Auth";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import logoadvance from "../../assets/landing/logoAdvance.png";

export const Navbar: FC = () => {
  const router = useRouter();
  const route = router.route;

  const auth = useSelector((state: RootState) => state.Auth);

  const [desp, setDesp] = useState(false);
  const handlerActive = () => {
    setDesp(!desp);
  }; //despliegue de opciones

  const handlerSesion = () => {
    if (typeof window !== "undefined") {
      clearSession();
      localStorage.clear(); //limpio storage
      deleteCookie("cookieToken"); //limpio cookie
    }
    router.push("/landingpage");
    setTimeout(() => router.reload(), 1000);
  };

  let OptionsNav;
  if (auth.autorized === true) {
    OptionsNav = [
      { option: "Inicio", path: "/landingpage" },
      { option: "Tratamientos", path: "/tratamientos" },
      { option: "Trabajos", path: "/trabajos" },
      { option: "Sobre Nosotros", path: "/landingpage#about" },
    ];
  } else {
    OptionsNav = [
      { option: "Inicio", path: "/landingpage" },
      { option: "Tratamientos", path: "/tratamientos" },
      { option: "Servicios", path: "/servicios" },
      { option: "Trabajos", path: "/trabajos" },
      { option: "Sobre Nosotros", path: "/landingpage#about" },
      { option: "Tienda", path: "/" },
    ];
  }

  return (
    <>
      <div className={style.navbar}>
        <div className={style.logo}>
          <Image
            src={logoadvance}
            alt="Logo advance_detailer"
            style={{
              borderRadius: "10px",
              margin: "5%",
              width: "40%",
              height: "60%",
              // marginLeft:"5%"
            }}
          />
        </div>

        <ul className="nav justify-content-end">
          {OptionsNav.map((e: any) => (
            <li className="nav-item">
              <Link className={style.link} href={e.path}>
                {e.option}
              </Link>
            </li>
          ))}
          {auth.autorized === true ? (
            <li className="nav-item">
              <Link className={style.link} href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  onClick={handlerActive}
                  style={{ marginRight: 20 }}
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                {desp === true ? (
                  <div className={style.active}>
                    <ul>
                      <li>
                        <Link href="/perfil" className={style.link}>
                          Perfil
                        </Link>
                      </li>
                      <li>
                        <Link href="/carrito" className={style.link}>
                          Carrito
                        </Link>
                      </li>
                      <li>
                        <Link href="/carrito" className={style.link}>
                          Compras
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/landingpage"
                          className={style.link}
                          onClick={handlerSesion}
                        >
                          Cerrar sesion
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link className={style.link} href="/login">
                Ingresar
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

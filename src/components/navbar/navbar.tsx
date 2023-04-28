import { FC, useState } from "react";
import { useRouter } from "next/router";
import style from "./navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import Router from "next/router";

export const Navbar: FC = () => {
  const router = useRouter();
  const route = router.route;

  const { auth } = useSelector((state: RootState) => state.Auth);

  if (auth === "" && typeof window !== "undefined" && route === "/") {
    Router.push("/login");
  }

  const [desp, setDesp] = useState(false);
  const handlerActive = () => {
    setDesp(!desp);
  };


const handlerSesion=()=>{
  if(typeof window !== "undefined"){
    localStorage.clear()
  }
}

  return (
    <>
      {route == "/" && auth !== "" ? (
        <div className={style.navbar}>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className={style.link} href="/landingpage">
                inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className={style.link} href="/trabajos">
                Trabajos
              </Link>
            </li>
            <li className="nav-item">
              <Link className={style.link} href="/landingpage#about">
                Sobre nosotros
              </Link>
            </li>
            <li className="nav-item">
              <div className={style.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  onClick={handlerActive}
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </div>
              {desp === true ? (
                <div className={style.active}>
                  <ul>
                    <li>
                      <Link href="" className={style.link}>
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <Link href="/carrito" className={style.link}>
                        Carrito
                      </Link>
                    </li>
                    <li>
                      <Link href="/landingpage" className={style.link} onClick={handlerSesion}>
                        Cerrar sesion
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      ) : route === "/landingpage" || "/login" || "/carrito"? (
        <div className={style.navbar}>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className={style.link} href="/landingpage">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className={style.link} href="/trabajos">
                Trabajos
              </Link>
            </li>
            <li className="nav-item">
              <Link className={style.link} href="/landingpage#about">
                Sobre nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className={style.link} href="/login">
                Ingresar
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

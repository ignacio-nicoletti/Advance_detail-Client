import { FC } from "react";
import { useRouter } from "next/router";
import style from "./navbar.module.css";
import Link from "next/link";

export const Navbar: FC = () => {
  const router = useRouter();
  const route = router.route;

  return (
    <>
   
      {route === "/landingpage" ? (
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
              <Link className={style.link} href="#about">
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
        route === "/trabajos" ? (
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
        ):""
      )}
    </>
  );
};

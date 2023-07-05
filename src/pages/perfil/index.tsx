import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { RootState } from "@/redux/store/store";
import { ProfileProps } from "@/types";
import { useSelector } from "react-redux";
import style from "./perfil.module.css";


export default function Perfil() {
  let  profile : ProfileProps= useSelector((state: RootState) => state.profile);


  return (
    <div className={style.contain}>
      <Navbar />
      <div className={style.profileContain}>
        <div className={style.profile}>
          <p>Email: {profile.email}</p>
          <p>Nombre: {profile.name? profile.name:"name"}</p>
          <p>Pais: {profile.country ? profile.country:"country"}</p>
          <p>Apellido: {profile.lastName? profile.lastName:"lastName"}</p>
          <p>Verificado: {profile.verify? profile.verify:"true"}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

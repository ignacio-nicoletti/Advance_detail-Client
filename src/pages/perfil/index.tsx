import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";
import style from "./perfil.module.css";

interface Profile {
  name: string;
  lastname: string;
  email: string;
  country: string;
  verify: boolean;
}
export default function Perfil() {
  const { profile } = useSelector((state: RootState) => state.profile);
  console.log(profile);

  return (
    <div className={style.contain}>
      <Navbar />
      <div className={style.profileContain}>
        <div className={style.profile}>
          <p>Email: {profile.email}</p>
          <p>Nombre: {profile.name}</p>
          <p>Pais: {profile.country}</p>
          <p>Apellido: {profile.lastName}</p>
          <p>Verificado: {profile.verify.toString()}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

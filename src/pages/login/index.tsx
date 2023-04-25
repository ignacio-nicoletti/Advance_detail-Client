import { Footer } from "@/components/Footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { postlogin } from "@/redux/api";
import { useState } from "react";
import style from "./login.module.css";

export default function Login() {
  const [login, setLogin] = useState(true);

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


let values={email,password}

  const handlerActive = () => {
    setLogin(!login);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    postlogin(values)
   
    
    // console.log(`password: ${password}\nEmail: ${email}`);
  };

  return (
    <div className={style.login}>
      <Navbar />
      <div className={style.contain}>
        <div className={style.check}>
          <span>Ingresar </span>

          <input
            className={style.checkbox}
            type="checkbox"
            id="reg-log"
            name="reg-log"
            onClick={handlerActive}
          />
          <label htmlFor="reg-log"></label>

          <span>Registrarse</span>

          <div>
            <input type="checkbox" id="toggle" />
            <label htmlFor="toggle"></label>
          </div>
        </div>

        {login === true ? (
          <div className={style.containFront}>
            <p>Ingresar</p>
            <form onSubmit={handleSubmit}>
              <input id='email' type="email" placeholder="Ingresa tu email" 
              onChange={(e) => setEmail(e.target.value)}
              />
              <input id='password' type="password" placeholder="Ingresa tu contraseña" 
              onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Entrar</button>
            </form>
          </div>
        ) : (
          <div className={style.containBack}>
            <p>Registrarse</p>

            <input type="email" placeholder="Ingresa tu email" />
            <input type="password" placeholder="Ingresa tu contraseña" />
            <button type="submit">Registrarse</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

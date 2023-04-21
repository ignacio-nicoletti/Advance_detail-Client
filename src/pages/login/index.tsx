import style from "./login.module.css";

export default function Login() {
  return (
    <div className={style.body}>
      

      <a href="https://front.codes/" className
      ="logo" target="_blank">
  {/* <img src="https://assets.codepen.io/1462889/fcy.png" alt=""> */}
</a>

<div className={style.section}>
  <div className={style.container}>
    <div >
      <div className={style.text_center }>
        <div className={style.section && style.text_center}>
          <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
          <input className={style.checkbox} type="checkbox" id="reg-log" name="reg-log" />
          <label htmlFor="reg-log"></label>
          <div className={style.card_3d_wrap && style.mx_auto}>
            <div className={style.card_3d_wrapper}>
              <div className={style.cardFront}>
                <div className={style.center_wrap}>
                  <div className={style.section && style.text_center}>
                    <h4 className="mb-4 pb-3">Log In</h4>
                    <div className={style.form_group}>
                      <input type="email" name="logemail" className={style.form_style} placeholder="Your Email" id="logemail" />
                      <i className={style.input_icon && style.uil &&style.uil_at}></i>
                    </div>
                    <div className={style.form_group && style.mt_2}>
                      <input type="password" name="logpass" className={style.form_style} placeholder="Your Password" id="logpass" />
                      <i className={style.input_icon && style.uil && style.uil_lock_alt}></i>
                    </div>
                    <a href="#" className="btn mt-4">submit</a>
                    <p className={style.text_center}><a href="#0" className={style.link}>Forgot your password?</a></p>
                  </div>
                </div>
              </div>
              <div className={style.card_back}>
                <div className={style.center_wrap}>
                  <div className={style.section && style.text_center}>
                    <h4 className="mb-4 pb-3">Sign Up</h4>
                    <div className={style.form_group}>
                      <input type="text" name="logname" className={style.form_style} placeholder="Your Full Name" id="logname" />
                      <i className={style.input_icon && style.uil && style.uil_user}></i>
                    </div>
                    <div className={style.form_group && style.mt_2}>
                      <input type="email" name="logemail" className={style.form_style} placeholder="Your Email" id="logemail" />
                      <i className={style.input_icon && style.uil &&style.uil_at}></i>
                    </div>
                    <div className={style.form_group && style.mt_2}>
                      <input type="password" name="logpass" className={style.form_style} placeholder="Your Password" id="logpass" />
                      <i className={style.input_icon && style.uil && style.uil_lock_alt}></i>
                    </div>
                    <a href="#" className="btn mt-4">submit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { RegisterForm } from "../../component/forms/RegisterForm/registerForm"
import style from "./register.module.scss"
export const Register = ()=>{
    return(
        <>
            <header className={style.header__content}>
                <img src={logo} alt="Logo do Kenzie Hub"/>
                <Link to="/">
                    <button className="header__button" type="button">Voltar</button>
                </Link>
            </header>
            <main className={style.main__content}>
                <div className={style.form__header}>
                    <h1 className="main__title">Crie sua conta</h1>
                    <p className="main__text">Rapido e grátis, vamos nessa</p>
                </div>
                <RegisterForm />
            </main>
        </>
        
    )
}
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { LoginForm } from "../../component/forms/LoginForm/loginForm"
import style from "./login.module.scss"

export const Login = ({ setUser }) => {
    return (
        <>
            <header className={style.header__content}>
                <img className="header__img" src={logo} alt="Logo do Kenzie Hub" />
            </header>
            <main className={style.main__content}>
                <h1 className="main__title">Login</h1>
                <LoginForm setUser={setUser} />
                <div className={style.register__container}>
                    <p className="main__text">Ainda não possui uma conta?</p>
                    <Link className="register__buttonContainer" to="/register">
                        <button className="register__button" type="button">Cadastre-se</button>
                    </Link>
                </div>

            </main>
        </>

    )
}
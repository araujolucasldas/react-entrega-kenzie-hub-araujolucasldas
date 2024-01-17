import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { LoginForm } from "../../component/forms/LoginForm/loginForm"

export const Login = ()=>{
    return(
        <>
            <header>
                <img src={logo} alt="Logo do Kenzie Hub" />
            </header>
            <main>
                <h1>Login</h1>
                <LoginForm />
                <p>Ainda não possui uma conta?</p>
                <Link to="/register">
                    <button type="button">Cadastre-se</button>
                </Link>
            </main>
        </>
        
    )
}
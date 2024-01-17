import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { RegisterForm } from "../../component/forms/RegisterForm/registerForm"

export const Register = ()=>{
    return(
        <>
            <header>
                <img src={logo} alt="Logo do Kenzie Hub"/>
                <Link to="/">
                    <button type="button">Voltar</button>
                </Link>
            </header>
            <main>
                <section>
                    <h1>Crie sua conta</h1>
                    <p>Rapido e grátis, vamos nessa</p>
                </section>
                <RegisterForm />
            </main>
        </>
        
    )
}
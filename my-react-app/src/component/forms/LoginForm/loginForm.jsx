import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema } from "./formSchema"
import { api } from "../../../services/api"
import { useNavigate } from "react-router-dom"
import style from "./loginForm.module.scss"
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa"
import { useState} from "react"

export const LoginForm = ({ setUser }) => {
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(formSchema) })

    const navigate = useNavigate()

    const submit = (formData) => {
        userLogin(formData)
    }

    
    const userLogin = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData)
            localStorage.setItem("@TOKEN", data.token)
            localStorage.setItem("@USERID", data.user.id)
            navigate("/dashboard")
            setUser(data.user)
            //setTech(data.user.techs)
            //console.log(tech)
        } catch (error) {
        }
    }

    return (
        <form className={style.login__form} onSubmit={handleSubmit(submit)}>
            <div className={style.input__container}>
                <label className="label__form" htmlFor="email">Email</label>
                <input className={style.login__input} type="email" placeholder="Digite seu e-mail" name="email" {...register("email")} />
                {errors.email ? <p className="error__text">{errors.email.message}</p> : null}
            </div>

            <div className={style.input__container}>
                <label className="label__form" htmlFor="password">Senha</label>
                <input className={style.login__input} type={showPassword ? "text" : "password"} placeholder="Digite sua senha" name="password" {...register("password")} />
                {errors.password ? <p className="error__text">{errors.password.message}</p> : null}
                {showPassword ? <span className={style.password__icon}> <FaRegEyeSlash onClick={()=> setShowPassword(!showPassword)} /> </span> : <span className={style.password__icon}> <FaRegEye onClick={()=> setShowPassword(!showPassword)} /> </span>}
            </div>

            <button className="login__button" type="submit">Entrar</button>
        </form>
    )
}
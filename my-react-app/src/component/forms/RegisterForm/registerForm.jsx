import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema } from "./formSchema"
import { api } from "../../../services/api"
import { useNavigate } from "react-router-dom"
import style from "./registerForm.module.scss"


export const RegisterForm = ({ setUser }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(formSchema) })

    const navigate = useNavigate()

    const submit = (formData) => {
        userRegister(formData)

    }

    const userRegister = async (formData) => {
        try {
            const { data } = await api.post("/users", formData)
            navigate("/dashboard")
            setUser(data.user)

            console.log(data.user)
        } catch (error) {
        }
    }

    return (
        <form className={style.register__form} onSubmit={handleSubmit(submit)}>
            <div className={style.input__container}>
                <label className="label__form" htmlFor="name">Nome</label>
                <input className={style.register__input} type="text" placeholder="Digite seu nome" name="name" {...register("name")} />
                {errors.name ? <p className="error__text">{errors.name.message}</p> : null}
            </div>

            <div className={style.input__container}>
                <label className="label__form" htmlFor="email">Email</label>
                <input className={style.register__input} type="email" placeholder="Digite seu email" name="email" {...register("email")} />
                {errors.email ? <p className="error__text">{errors.email.message}</p> : null}
            </div>

            <div className={style.input__container}>
                <label className="label__form" htmlFor="password">Senha</label>
                <input className={style.register__input} type="password" placeholder="Digite sua Senha" name="password" {...register("password")} />
                {errors.password ? <p className="error__text">{errors.password.message}</p> : null}
            </div>

            <div className={style.input__container}>
                <label className="label__form" htmlFor="confirmPassword">Confirmar Senha</label>
                <input className={style.register__input} type="password" placeholder="Digite novamente sua senha" name="confirmPassword" {...register("confirmPassword")} />
                {errors.confirmPassword ? <p className="error__text">{errors.confirmPassword.message}</p> : null}
            </div>

            <div className={style.input__container}>
                <label className="label__form" htmlFor="bio">Bio</label>
                <input className={style.register__input} type="text" placeholder="Fale sobre você" name="bio" {...register("bio")} />
                {errors.bio ? <p className="error__text">{errors.bio.message}</p> : null}
            </div>

            <div className={style.input__container}>
                <label className="label__form" htmlFor="contact">Contato</label>
                <input className={style.register__input} type="text" placeholder="Opção de contato" name="contact" {...register("contact")} />
                {errors.contact ? <p className="error__text">{errors.contact.message}</p> : null}
            </div>

            <div className={style.input__container}>
                <label className="label__form" htmlFor="select">Selecionar módulo</label>
                <select className={style.register__input} name="select"  {...register("course_module")}>
                    <option value="">Selecionar módulo</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </select>
                {errors.course_module ? <p className="error__text">{errors.course_module.message}</p> : null}
            </div>

            <button className="registerPage__button" type="submit">Cadastrar</button>
        </form>
    )
}
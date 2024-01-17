import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { formSchema } from "./formSchema"
import { api } from "../../../services/api"

export const LoginForm = ()=>{
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(formSchema)})

    const submit = (formData)=>{
        userLogin(formData)
        console.log(formData)
    }

    const userLogin = async(formData)=>{
        try {
            const {data} = await api.post("/sessions", formData)
            alert("sucesso")
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite seu e-mail" name="email" {...register("email")} />
            {errors.email ? <p>{errors.email.message}</p> : null}
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite sua senha" name="password" {...register("password")} />
            {errors.password ? <p>{errors.password.message}</p> : null}
            <button type="submit">Entrar</button>
        </form>
    )
}
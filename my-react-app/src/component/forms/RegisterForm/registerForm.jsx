import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { formSchema } from "./formSchema"

export const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(formSchema)})

    const submit = (formData)=>{
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Digite seu nome" name="name" {...register("name")} />
            {errors.name ? <p>{errors.name.message}</p> : null}

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite seu email" name="email" {...register("email")} />
            {errors.email ? <p>{errors.email.message}</p> : null}

            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite sua Senha" name="password" {...register("password")} />
            {errors.password ? <p>{errors.password.message}</p> : null}

            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" placeholder="Digite novamente sua senha" name="confirmPassword" {...register("confirmPassword")} />
            {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null}

            <label htmlFor="bio">Bio</label>
            <input type="text" placeholder="Fale sobre você" name="bio" {...register("bio")} />
            {errors.bio ? <p>{errors.bio.message}</p> : null}

            <label htmlFor="contact">Contato</label>
            <input type="text" placeholder="Opção de contato" name="contact" {...register("contact")} />
            {errors.contact ? <p>{errors.contact.message}</p> : null}

            <label htmlFor="select">Selecionar módulo</label>
            <select name="select"  {...register("course_module")}>
                <option value="">Selecionar módulo</option>
                <option value="primeiro módulo">Primeiro Módulo</option>
                <option value="segundo módulo">Segundo Módulo</option>
                <option value="terceiro módulo">Terceiro Módulo</option>
            </select>
            {errors.course_module ? <p>{errors.course_module.message}</p> : null}
            <button type="submit">Cadastrar</button>
        </form>
    )
}
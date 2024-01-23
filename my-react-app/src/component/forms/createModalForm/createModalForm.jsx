import { useForm } from "react-hook-form"
import style from "./createModalForm.module.scss"
import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"

export const CreateModalForm = () => {
    const { register, handleSubmit } = useForm()

    const {techRegister} = useContext(TechContext)

    const submit = (formData) => {
        techRegister(formData)
    }

    return (
        <>
            <form className={style.register__form} onSubmit={handleSubmit(submit)}>
                <div className={style.input__container}>
                    <label className="label__form" htmlFor="title" >Nome</label>
                    <input className={style.register__input} type="text" placeholder="Digite o nome da tecnologia" name="title" {...register("title")} />
                </div>

                <div className={style.input__container}>
                    <label className="label__form" htmlFor="status">Selecionar status</label>
                    <select className={style.register__input} name="status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                </div>

                <button className="registerPage__button" type="submit">Cadastrar Tecnologia</button>
            </form>
        </>
    )
}
import { useForm } from "react-hook-form"
import style from "./editModalForm.module.scss"
import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"

export const EditModalForm = () => {
    const {editingTech, techUpdate} = useContext(TechContext)

    const { register, handleSubmit } = useForm({
        values: {
            title: editingTech.title,
            status: editingTech.status
        }
    })

    const submit = (formData) => {
        techUpdate(formData)
    }

    return (
        <>
            <form className={style.edit__form} onSubmit={handleSubmit(submit)}>
                <div className={style.input__container}>
                    <label className="label__form" htmlFor="title" >Nome</label>
                    <input className={style.edit__input} type="text" placeholder="Digite o nome da tecnologia" name="title" disabled={true} {...register("title")} />
                </div>

                <div className={style.input__container}>
                    <label className="label__form" htmlFor="status">Selecionar status</label>
                    <select className={style.edit__input} name="status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                </div>

                <button className="registerPage__button" type="submit">Salvar alterações</button>
            </form>
        </>
    )
}
import { useForm } from "react-hook-form"
import style from "./editModalForm.module.scss"
import { api } from "../../../services/api"

export const EditModalForm = ({setEditingTech, editingTech, setTech, tech}) => {
    const { register, handleSubmit } = useForm({
        values: {
            title: editingTech.title,
            status: editingTech.status
        }
    })

    const submit = (formData) => {
        //console.log(formData)
        //console.log(editingTech.title)
        //console.log(editingTech.status)        
        //console.log(editingTech.id)
        
        techUpdate(formData)

    }
    const techUpdate = async(formData)=>{
        try {
            const token = localStorage.getItem("@TOKEN")

            const {data} = await api.put(`/users/techs/${editingTech.id}`, formData, {
                headers: { Authorization: `Bearer ${token}` },
              })

            const newTechList = tech.map((item)=>{
                if(item.id === editingTech.id){
                    return data
                }else{
                    return item
                }
            })

            setTech(newTechList)
            setEditingTech(null)
            //console.log(newTechList)
        } catch (error) {
            console.log(error)
        }
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
import { useContext } from "react"
import { EditModalForm } from "../../forms/editModalForm/editModalForm"
import style from "./editTechModal.module.scss"
import { TechContext } from "../../../providers/TechContext"

export const EditTechModal = ({})=>{
    const {setEditingTech} = useContext(TechContext)

    return(
        <>
            <div className={style.createModal__overlay} role="dialog">
                <div className={style.createModal__box}>
                    <div className={style.createModal__header}>
                        <h3 className="modal__title">Tecnologia detalhes</h3>
                        <button className="modal__close" onClick={() => setEditingTech(null)}>X</button>
                    </div>
                    <div className={style.createModal__content}>
                        <EditModalForm/>
                    </div>
                </div>
            </div>
        </>
    )
}
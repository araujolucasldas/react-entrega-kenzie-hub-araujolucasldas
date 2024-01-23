import { EditModalForm } from "../../forms/editModalForm/editModalForm"
import style from "./editTechModal.module.scss"

export const EditTechModal = ({setEditingTech, editingTech, setTech, tech})=>{
    return(
        <>
            <div className={style.createModal__overlay} role="dialog">
                <div className={style.createModal__box}>
                    <div className={style.createModal__header}>
                        <h3 className="modal__title">Tecnologia detalhes</h3>
                        <button className="modal__close" onClick={() => setEditingTech(null)}>X</button>
                    </div>
                    <div className={style.createModal__content}>
                        <EditModalForm setEditingTech={setEditingTech} editingTech={editingTech} setTech={setTech} tech={tech} />
                    </div>
                </div>
            </div>
        </>
    )
}
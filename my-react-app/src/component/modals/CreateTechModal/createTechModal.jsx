import { CreateModalForm } from "../../forms/createModalForm/createModalForm"
import style from "./createTechModal.module.scss"

export const CreateTechModal = ({setOpenCreateModal}) => {

    return (
        <>
            <div className={style.createModal__overlay} role="dialog">
                <div className={style.createModal__box}>
                    <div className={style.createModal__header}>
                        <h3 className="modal__title">Cadastrar Tecnologia</h3>
                        <button className="modal__close" onClick={() => setOpenCreateModal(false)}>X</button>
                    </div>
                    <div className={style.createModal__content}>
                        <CreateModalForm/>
                    </div>
                </div>
            </div>

        </>
    )
}
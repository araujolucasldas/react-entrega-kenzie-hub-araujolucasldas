import style from "./techCard.module.scss"
import { MdOutlineEdit } from "react-icons/md";
import { CgTrash } from "react-icons/cg"
import { EditTechModal } from "../../modals/EditTechModal/editTechModal";

import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

//techDelete
//editingTech, setEditingTech,techUpdate
export const TechCard = () => {
    const {techDelete} = useContext(TechContext)

    const {tech} = useContext(TechContext)

    const {editingTech, setEditingTech} = useContext(TechContext)
   
    return (
        <>

            {tech.map((item) => (
                <li key={item.id} className={style.tech__card}>
                    <p className="tech__text">{item.title}</p>
                    <div className={style.tech__options}>
                        <span className="tech__status">{item.status}</span>
                        <div className={style.tech__icons}>
                            <MdOutlineEdit onClick={() => setEditingTech(item)} />
                            {editingTech ? <EditTechModal 
                            //techUpdate={techUpdate}
                            // editingTech={editingTech} 
                            // setEditingTech={setEditingTech}
                            /> : null}
                            <CgTrash onClick={() => techDelete(item.id)} />
                        </div>


                    </div>
                </li>
            ))}


        </>
    )
}
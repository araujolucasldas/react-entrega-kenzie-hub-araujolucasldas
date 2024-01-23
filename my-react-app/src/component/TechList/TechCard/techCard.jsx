import style from "./techCard.module.scss"
import { MdOutlineEdit } from "react-icons/md";
import { CgTrash } from "react-icons/cg"
import { useState } from "react";
import { EditTechModal } from "../../modals/EditTechModal/editTechModal";

export const TechCard = ({setTech, tech, techDelete})=>{
    //const [openEditModal, setOpenCreateModal] = useState(false)
    const [editingTech, setEditingTech] = useState(null)

    //const editingTitle = editingTech.title
    //const editingStatus = editingTech.status

    //console.log(editingTech)
    return(
        <>
                
                {tech.map((item) => (
                     <li key={item.id} className={style.tech__card}>
                     <p className="tech__text">{item.title}</p> 
                     <div className={style.tech__options}>
                         <span className="tech__status">{item.status}</span>
                         <MdOutlineEdit onClick={()=>setEditingTech(item)} />
                         {editingTech ? <EditTechModal editingTech={editingTech} setEditingTech={setEditingTech}
                         setTech={setTech}
                         tech={tech}
                         /> : null}
                         <CgTrash onClick={()=> techDelete(item.id)} />
                         
                     </div>
                 </li>
                  ))}
                
            
        </>
    )
}
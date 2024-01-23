import { TechCard } from "./TechCard/techCard"
import style from "./techList.module.scss"

//techDelete
//editingTech,setEditingTech,techUpdate
//{tech}
export const TechList = ()=>{
    return(
        <div className={style.tech__container}>
            <TechCard 
            // techUpdate={techUpdate}
            // editingTech={editingTech}
            // setEditingTech={setEditingTech}
            //tech={tech} 
            //techDelete={techDelete} 
            />
        </div>
    )
}
import { TechCard } from "./TechCard/techCard"
import style from "./techList.module.scss"

export const TechList = ({setTech, tech, techDelete})=>{
    return(
        <div className={style.tech__container}>
            <TechCard setTech={setTech} tech={tech} techDelete={techDelete} />
        </div>
    )
}
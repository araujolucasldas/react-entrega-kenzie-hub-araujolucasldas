import { TechCard } from "./TechCard/techCard"
import style from "./techList.module.scss"

export const TechList = ()=>{
    return(
        <div className={style.tech__container}>
            <TechCard/>
        </div>
    )
}
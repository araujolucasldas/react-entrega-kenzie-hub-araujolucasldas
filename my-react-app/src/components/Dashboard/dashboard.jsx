import logo from "../../assets/logo.svg"
import { TechList } from "../../component/TechList/techList"
import { CreateTechModal } from "../../component/modals/CreateTechModal/createTechModal"
import style from "./dashboard.module.scss"
import { useState } from "react"

export const Dashboard = ({ user, userLogout, tech, setTech, techDelete}) => {
    const [openCreateModal, setOpenCreateModal] = useState(false)



    return (
        <>
            <header className={style.header__content}>
                <img src={logo} alt="Logo do Kenzie Hub" />
                <button className="header__button" type="button" onClick={userLogout}>Sair</button>
            </header>
            <main className={style.main__content}>
                <div className={style.user__container}>
                    <section className={style.user__info}>
                        <h1 className="user__name">Olá, {user?.name} </h1>
                        <p className="user__module">{user?.course_module}</p>
                    </section>
                </div>

                <section className={style.techs__container}>
                    <div className={style.techs__header}>
                        <h1 className="techs__title">Tecnologias</h1>
                        <button className="techs__button" onClick={() => setOpenCreateModal(true)}>+</button>
                        {openCreateModal ? <CreateTechModal setOpenCreateModal={setOpenCreateModal} setTech={setTech} /> : null}
                    </div>
                    <TechList setTech={setTech} tech={tech} techDelete={techDelete}/>
                </section>
            </main>
        </>

    )
}
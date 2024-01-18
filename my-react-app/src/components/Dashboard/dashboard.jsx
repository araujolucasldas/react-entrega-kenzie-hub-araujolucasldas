import logo from "../../assets/logo.svg"
import style from "./dashboard.module.scss"

export const Dashboard = ({user, userLogout})=>{
    return(
        <>
            <header className={style.header__content}>
               <img src={logo} alt="Logo do Kenzie Hub"/>
               <button className="header__button" type="button" onClick={userLogout}>Sair</button>
            </header>
            <main className={style.main__content}>
                <section className={style.user__info}>
                    <h1 className="user__name">Olá, {user?.name} </h1>
                    <p className="user__module">{user?.course_module}</p>
                </section>
                <section className={style.user__warning}>
                    <h1 className="warning__title">Que pena! Estamos em desenvolvimento </h1>
                    <p className="warning__text">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </section>
            </main>
        </>
        
    )
}
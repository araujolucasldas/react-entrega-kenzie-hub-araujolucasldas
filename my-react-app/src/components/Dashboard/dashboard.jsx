import logo from "../../assets/logo.svg"

export const Dashboard = ()=>{
    return(
        <>
            <header>
               <img src={logo} alt="Logo do Kenzie Hub"/>
               <button type="button">Sair</button>
            </header>
            <main>
                <section>
                    <h1>Olá, inserir nome</h1>
                    <span>inserir módulo</span>
                </section>
                <section>
                    <h1>Que pena! Estamos em desenvolvimento </h1>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </section>
            </main>
        </>
        
    )
}
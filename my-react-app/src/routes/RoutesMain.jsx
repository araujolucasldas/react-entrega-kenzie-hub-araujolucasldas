import {Routes, Route, useNavigate} from "react-router-dom"
import { Login } from "../components/Login/login"
import { Register } from "../components/Register/register"
import { Dashboard } from "../components/Dashboard/dashboard"
import { useState, useEffect } from "react"
import { api } from "../services/api"

export const RoutesMain = ()=>{
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const userLogout = ()=>{
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setUser(null)
        navigate("/")
    }

    const [tech, setTech] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem("@TOKEN")
        const userId = localStorage.getItem("@USERID")

        const getTechs = async()=>{
            try {
                const { data } = await api.get("/profile/", {
                    headers: { Authorization: `Bearer ${token}` },
                  })

                  setTech(data.techs)
                  setUser(data.user)
            } catch (error) {
                console.log(error)
            }
        }
        if (token && userId) {
            getTechs();
          }
    },[])

    const [editingTech, setEditingTech] = useState(null)



    const techDelete = async (deletingTech)=>{
        const token = localStorage.getItem("@TOKEN")

        try {
            await api.delete(`/users/techs/${deletingTech}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            
            const newTechList = tech.filter((item) => item.id !== deletingTech)

            setTech(newTechList)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <Routes>
                <Route path="/" element={<Login setUser={setUser} setTech={setTech}/>}/>
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" 
                element={<Dashboard 
                user={user} 
                userLogout={userLogout} 
                tech={tech} 
                setTech={setTech}
                techDelete={techDelete}
                />} />
            </Routes>
        </>
    )
}
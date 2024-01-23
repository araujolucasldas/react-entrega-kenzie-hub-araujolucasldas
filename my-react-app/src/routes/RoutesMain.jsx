import {Routes, Route, useNavigate} from "react-router-dom"
import { Login } from "../components/Login/login"
import { Register } from "../components/Register/register"
import { Dashboard } from "../components/Dashboard/dashboard"
import { useState, useEffect } from "react"
//import { api } from "../services/api"

export const RoutesMain = ()=>{
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const userLogout = ()=>{
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setUser(null)
        navigate("/")
    }

    // const [tech, setTech] = useState([])

    // useEffect(()=>{
    //     const token = localStorage.getItem("@TOKEN")
    //     const userId = localStorage.getItem("@USERID")

    //     const getTechs = async()=>{
    //         try {
    //             const { data } = await api.get("/profile/", {
    //                 headers: { Authorization: `Bearer ${token}` },
    //               })

    //               setTech(data.techs)
    //               //setUser(data.user)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     if (token && userId) {
    //         getTechs();
    //       }
    // },[])

    // const techRegister = async(formData)=>{
    //     const token = localStorage.getItem("@TOKEN")
    //     console.log(formData)
    //     try {
    //         const{data} = await api.post("/users/techs/", formData, { headers:{
    //             Authorization: `Bearer ${token}`
    //         }
                
    //         })
    //         setTech([...tech, data])
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    // const techDelete = async (deletingTech)=>{
    //     const token = localStorage.getItem("@TOKEN")

    //     try {
    //         await api.delete(`/users/techs/${deletingTech}`, {
    //             headers: { Authorization: `Bearer ${token}` }
    //         })
            
    //         const newTechList = tech.filter((item) => item.id !== deletingTech)

    //         setTech(newTechList)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const [editingTech, setEditingTech] = useState(null)

    // const techUpdate = async(formData)=>{
    //     try {
    //         const token = localStorage.getItem("@TOKEN")

    //         const {data} = await api.put(`/users/techs/${editingTech.id}`, formData, {
    //             headers: { Authorization: `Bearer ${token}` },
    //           })

    //         const newTechList = tech.map((item)=>{
    //             if(item.id === editingTech.id){
    //                 return data
    //             }else{
    //                 return item
    //             }
    //         })

    //         setTech(newTechList)
    //         setEditingTech(null)
    //         //console.log(newTechList)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return(
        <>
            <Routes>
                <Route path="/" element={<Login setUser={setUser} />}/>
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" 
                element={<Dashboard 
                    //techRegister={techRegister}

                    // techUpdate={techUpdate}
                    // editingTech={editingTech}
                    // setEditingTech={setEditingTech}

                user={user} 
                userLogout={userLogout}

                //tech={tech} 
                //techDelete={techDelete}
                />} />
            </Routes>
        </>
    )
}
import { createContext } from "react";

import { useState, useEffect } from "react";
import { api } from "../services/api";

export const TechContext = createContext({})

export const TechProvider = ({children})=>{

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
            } catch (error) {
                console.log(error)
            }
        }
        if (token && userId) {
            getTechs();
          }
    },[])


    const techRegister = async(formData)=>{
        const token = localStorage.getItem("@TOKEN")

        try {
            const{data} = await api.post("/users/techs/", formData, { headers:{
                Authorization: `Bearer ${token}`
            }
                
            })
            setTech([...tech, data])
        } catch (error) {
            console.log(error)
        }
    }

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

    const [editingTech, setEditingTech] = useState(null)

    const techUpdate = async(formData)=>{
        try {
            const token = localStorage.getItem("@TOKEN")

            const {data} = await api.put(`/users/techs/${editingTech.id}`, formData, {
                headers: { Authorization: `Bearer ${token}` },
              })

            const newTechList = tech.map((item)=>{
                if(item.id === editingTech.id){
                    return data
                }else{
                    return item
                }
            })

            setTech(newTechList)
            setEditingTech(null)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <TechContext.Provider value={{tech, techRegister, techDelete, techUpdate, editingTech, setEditingTech}}>
            {children}
        </TechContext.Provider>
    )
}
import {Routes, Route, useNavigate} from "react-router-dom"
import { Login } from "../components/Login/login"
import { Register } from "../components/Register/register"
import { Dashboard } from "../components/Dashboard/dashboard"
import { useState } from "react"

export const RoutesMain = ()=>{
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const userLogout = ()=>{
        setUser(null)
        navigate("/")
    }

    return(
        <>
            <Routes>
                <Route path="/" element={<Login setUser={setUser} />}/>
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard user={user} userLogout={userLogout} />} />
            </Routes>
        </>
    )
}
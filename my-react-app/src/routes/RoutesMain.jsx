import {Routes, Route} from "react-router-dom"
import { Login } from "../components/Login/login"
import { Register } from "../components/Register/register"
import { Dashboard } from "../components/Dashboard/dashboard"

export const RoutesMain = ()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    )
}
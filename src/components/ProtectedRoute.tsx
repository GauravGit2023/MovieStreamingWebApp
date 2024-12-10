import { Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const ProtectedRoute = ({ children }:
    { children: React.ReactNode }
)=>{
    //@ts-ignore
    const {user} = UserAuth();
    if(!user){
        return <Navigate to='/' />
    } else{
        return <div>{children}</div>
    }   
}

export default ProtectedRoute
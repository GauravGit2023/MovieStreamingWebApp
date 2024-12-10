import { UserAuth } from "../context/AuthContext"


const UserDetails = ()=>{
    //@ts-ignore
    const { user } = UserAuth();

    return <div className="text-gray-400 p-4 md:p-8 text-2xl md:text-4xl flex">
        <div className="mr-2">
            Email: 
        </div>
        <div>
            {user?.email}
        </div>
    </div>
}

export default UserDetails
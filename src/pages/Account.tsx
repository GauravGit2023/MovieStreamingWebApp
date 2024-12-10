import Savedshows from "../components/Savedshows"
import UserDetails from "../components/UserDetails"

const Account = () =>{
    return <>
        <div className="w-full text-white">
            <img className="w-full h-[300px] object-cover " src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp" alt="background-image" />
            <div className="w-full h-[300px] bg-black/60 fixed left-0 top-0">
            </div>
            <div className="top-[20%] absolute flex justify-between w-full">
                <h1 className="text-white font-bold  p-4 md:p-8 text-3xl md:text-5xl">
                    My Shows
                </h1>
                <UserDetails />
            </div>
            
        </div>
        <Savedshows />
    </>
}

export default Account
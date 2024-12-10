import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = ()=>{
  //@ts-ignore
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async ()=>{
    try{
      await logOut();
      navigate("/");
    } catch (error){
      console.log(error);
    }
  }

  if(window.location.pathname === "/login" || window.location.pathname === "/signup"){
    return (
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
          <Link to='/'> 
            <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
              NETFLIX
            </h1>
          </Link>
      </div>
    )
  }

  return (
  <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
    <Link to='/'> 
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
    </Link>
    {user?.email !== undefined ? (
      <div>
        <Link to='/account'> 
          <button className="px-4 py-2  text-white hover:border-white hover:border-2">Account</button>
        </Link> 
        <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white hover:border-white hover:border-2 ml-2">Logout</button>
      </div>
    ) : (
      <div>
        <Link to='/login'> 
          <button className="px-4 py-2  text-white hover:border-white hover:border-2">Sign In</button>
        </Link>
        <Link to='/signup'> 
          <button className="px-4 py-2 bg-red-600 text-white hover:border-white hover:border-2 ml-2">Sign Up</button>
        </Link>
      </div>
    )}
  </div>
  )
}

export default Navbar;
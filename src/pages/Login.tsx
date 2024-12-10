import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext";


const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    //@ts-ignore
    const { logIn } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: any)=>{
        e.preventDefault();
        try{
            await logIn(email, password);
            navigate('/');
        } catch(error){
            console.log(error);
            setError(true);
        }
    }

    return (
        <>
        <div className="w-full h-screen">
                <img className="hidden sm:block w-full h-screen absolute object-cover" src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp" alt="background-image" />
                <div className="fixed bg-black/40 w-full h-screen left-0 top-0"></div>
                <div className="fixed w-full px-4 py-24 z-50"> 
                    <div className="bg-black/75 max-w-[450px] h-[600px] mx-auto text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold items-center flex justify-center">Sign In</h1>
                            {error ? <p className="p-3 my-2 bg-red-400 flex justify-center">Incorrect Username/Password</p> : null}
                            <form onSubmit={handleSubmit} className="flex flex-col py-4 w-full">
                                <input 
                                    onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }}
                                    type="Email"
                                    placeholder="Email"
                                    className="my-2 p-3 bg-gray-700 rounded"
                                ></input>
                                <input 
                                    onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}
                                    type="Password"
                                    placeholder="Password"
                                    className="my-2 p-3 bg-gray-700 rounded"
                                ></input>
                                <button className="p-3 my-6 rounded bg-red-600 hover:bg-white hover:text-black">Sign In</button>
                            </form>
                            <div className="flex justify-between text-gray-500">
                                <p>
                                    <input type="checkbox" className="mr-2" ></input>
                                    Remember me
                                </p>
                                <p>
                                    Need Help?
                                </p>
                            </div>
                            <div className="my-3">
                                <span className="text-gray-400 mr-2">Already subscribed to Netflix ?</span>
                                <Link to='/signup'>Sign Up</Link>
                            </div>
                        </div>
                    </div>                       
                </div>
            </div>
        </>
    )
}

export default Login
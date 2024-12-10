
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Savedshows = ()=>{
    const [movies, setMovies] = useState([]);
    //@ts-ignore
    const { user } = UserAuth();

    useEffect(() =>{
        onSnapshot(doc(db, 'user', `${user?.email}`), (doc)=>{
            setMovies(doc.data()?.savedShows);
        });
    }, [user?.email]);

    const movieRef = doc(db, 'user', `${user?.email}`);
    const handleRemove = async (passedId: string | number)=>{
        try{
            //@ts-ignore
            const result = movies.filter((item)=> item?.id !== passedId);

            await updateDoc(movieRef,{
                savedShows: result
            })
        }catch(error){
            console.log(error);
        }
    }
    const slideLeft = ()=>{
        var slider = document.getElementById("slider");
        //@ts-ignore
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = ()=>{
        var slider = document.getElementById("slider");
        //@ts-ignore
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div className="p-4">
            <div className="relative flex items-center group">
                <MdChevronLeft size={40} className="absolute bg-white rounded-full left-0 z-10 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block" onClick={slideLeft} />
                <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide">
                {movies.map((item: any, id) => 
                    <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative">
                        <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                        <div className="absolute w-full h-full top-0 left-0 bg-black/80 opacity-0 hover:opacity-100 text-white">
                            <p className="whitespace-normal text-xs md:text-sm font-bold items-center h-full flex justify-center text-center">{item?.title}</p>
                            <p onClick={()=>handleRemove(item.id)} className="top-4 right-4 absolute"><AiFillDelete /></p>
                        </div>
                    </div>   
                )}
                </div>
                <MdChevronRight size={40} className="absolute bg-white rounded-full right-0 z-10 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block" onClick={slideRight} />
            </div>
        </div>
    )
}

export default Savedshows
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { db } from "../firebase";
import { updateDoc, doc, arrayUnion} from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';

const Movie = ({item}:{item: any}) =>{
    const [like, setLike] = useState(false);
    //@ts-ignore
    const { user } = UserAuth();

    const handleSaveShow = async (passedId: any)=>{
        if(user?.email){
            setLike(!like);
            const movieId = doc(db, 'user', `${user?.email}`);

            try{
                await updateDoc(movieId, {
                    //@ts-ignore
                    savedShows:  arrayUnion({
                        id: item.id,
                        title: item.title,
                        img: item.backdrop_path
                    })
                });
            } catch (error){
                console.log(error);
            }
        }
    }
    
    return (
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative">
            <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className="absolute w-full h-full top-0 left-0 bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="whitespace-normal text-xs md:text-sm font-bold items-center h-full flex justify-center text-center">{item?.title}</p>
                <p onClick={()=>handleSaveShow(item.id)}>
                    {like? <FaHeart className="absolute top-4 left-4 text-gray-200"/> : <FaRegHeart className="absolute top-4 left-4 text-gray-200" />}
                </p>
            </div>
        </div>
    )
}

export default Movie;
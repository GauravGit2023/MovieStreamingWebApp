import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import {MdChevronLeft, MdChevronRight} from "react-icons/md"

const Row = ({heading, fetchUrl, rowID}:{
    heading: string;
    fetchUrl: string;
    rowID: string;
}) =>{
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        axios.get(fetchUrl).then((response)=>{
            setMovies(response.data.results);
        })
    }, [fetchUrl]);

    const slideLeft = ()=>{
        var slider = document.getElementById("slider" + rowID);
        //@ts-ignore
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = ()=>{
        var slider = document.getElementById("slider" + rowID);
        //@ts-ignore
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div>
            <h2 className="text-white font-bold md:text-xl p-4">{heading}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft size={40} className="absolute bg-white rounded-full left-0 z-10 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block" onClick={slideLeft} />
                <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide">
                {movies.map((item: any, id) => 
                    {if(item.backdrop_path === null){
                        return null;
                    } else {
                        return <Movie item={item} key={id} />
                    }}    
                )}
                </div>
                <MdChevronRight size={40} className="absolute bg-white rounded-full right-0 z-10 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block" onClick={slideRight} />
            </div>
        </div>
    )
}

export default Row;
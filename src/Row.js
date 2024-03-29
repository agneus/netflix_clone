import React, {useState, useEffect} from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseurl="https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl, isLargeRow}) {
    const [movies,setMovies]= useState([]);
    const [trailerUrl, settrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request= await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    const opts={
        height: "390",
        width:"100%",
        playerVars:{
            autoplay: 1,
        }
    }

    //console.log(movies);
    const handleClick=(movie) =>{
        if(trailerUrl){
            settrailerUrl(""); 
        }else{
            movieTrailer(movie?.name || movie.title || "")
            .then((url) =>{
                const urlParams= new URLSearchParams(new URL(url).search);
                settrailerUrl(urlParams.get("v"));
            } ).catch((error) => console.log(error))
        }

    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    onClick={()=>handleClick(movie)}
                    src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/> }
        </div>
    )
}

export default Row;

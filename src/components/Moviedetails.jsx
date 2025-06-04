import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Home.css"
const Moviedetails = ({handlewatchlist,removefromwatchlist,watchlist}) => {
    const {id} = useParams();
    const [he,sethe] = useState(null)
    const [he1,sethe1] = useState({0:1})
    async function hello(id){
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e970e6cff0e95f81d9a04f1c5aca66bc&language=en-US`)
        const res = await data.json()
        sethe(res)
        const data1 = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e970e6cff0e95f81d9a04f1c5aca66bc&language=en-US`)
        const res1 = await data1.json()
        let helo = res1.results.filter(hel => hel.type === "Trailer") 
        sethe1(helo[0])
        
    }
    const isinwatchlist = watchlist && he ? watchlist.some(movie => movie.id === he.id) : false;

    
    useEffect(()=>{
        hello(id);
    },[id])
  return (
    <div>{he? <div 
    className="helo" 
    style={{ 
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${he.backdrop_path})`, 
    }}
  >
    <div className='hu'>Viewly
    
    </div>
    

    <div className='hetitle'>{he.title}</div><br />
    <div className='overview'>{he.overview}
    <br /><br />
        Release Date : {he.release_date}
        <br />
        Duration : {he.runtime} mins
        <br />
        Popularity : {he.popularity} <br />
        Rating : {he.vote_average} <br />
        Budget : {he.budget}
        <br />
        <br />    
        <Link to={`/movie/${id}/${he1.key}`} >Play Trailer</Link>
        <a href={`${he.homepage}`}>Watch Movie</a>
        
        <button onClick={() => isinwatchlist ? removefromwatchlist(he) : handlewatchlist(he)}>
    {isinwatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
</button>
        
    </div>
    
  </div>
       : 
        <p>loading.....</p>
        }
    </div>
 
  )
}

export default Moviedetails

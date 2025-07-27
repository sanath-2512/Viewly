import React, { useEffect, useState } from 'react'
import TrendingMovies from './TrendingMovies'
import "./Home.css"
import searchposter from "./searchposter.png"
import { Link } from 'react-router-dom'
import logo from "./logo1.png"
const Search = () => {
    const[search,setsearch] = useState("")
    const[hee,sethee] = useState([])
    async function trending (){
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&api_key=e970e6cff0e95f81d9a04f1c5aca66bc&language=en-US&page=1`)
        const res = await data.json()
        sethee(res.results)
    }
    function hell(e){
        setsearch(e.target.value)
    }
    useEffect(() => {
        trending();
    },[search])
  return (
    <div>
     <div className='nav'>
     <Link to="/"><div className="logo"><img src={logo} alt="yo" /></div></Link>
            <div className='navc'>
            <p><Link to="/">Home</Link></p>
           <p> <Link to="/search">Search</Link></p>
            <p><Link to="/watchlist">Watchlist</Link></p>
            <p><Link to="/about">About Us</Link></p>
            </div>
      </div>
      <div className='heeee' style={{ 
      backgroundImage: `url(${searchposter})`, 
      width: "100%", 
      height: "20vw", 
    
      borderRadius: '0.5vw',
      backgroundSize: "cover",
      backgroundPosition:"center",
      backgroundRepeat: "no-repeat",
      marginBottom: "0.5vw"
 
    }}>
            <input type="text" placeholder='Search Movies' onChange={hell}/> 
      </div>
      
      {search === "" || hee.length === 0 ? <div className='ye'>Welcome! Start typing to explore movies.</div> : (<div className="trendmoviecard">
    {hee.map((movie) => (
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <TrendingMovies poster_path={movie.poster_path} title={movie.title} />
      </Link>
    ))}  
  </div>
)}
    
        
    </div>
  )
}

export default Search

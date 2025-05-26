import React, { useEffect, useState } from 'react'
import TrendingMovies from './TrendingMovies'
import "./Home.css"
import { Link } from 'react-router-dom'
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
            <div>Viewly</div>
            <div className='navc'>
            <p><Link to="/">Home</Link></p>
           <p> <Link to="/search">Search</Link></p>
            <p><Link to="/watchlist">Watchlist</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/contact">Contact</Link></p>
            </div>
      </div>
      <div className='heeee'>
            <input type="text" placeholder='Search Movies' onChange={hell}/> 
      </div>
      <div>{search}</div>
      <div className="trendmoviecard">
        {search == "" || hee.length === 0 ? <div></div> : hee.map((movie) => {
            return <Link to={`/movie/${movie.id}`} ><TrendingMovies poster_path={movie.poster_path} title={movie.title} /></Link>
        })}
        
    </div>
    </div>
  )
}

export default Search

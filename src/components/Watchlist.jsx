import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import TrendingMovies from './TrendingMovies'
const Watchlist = ({watchlist}) => {
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
            <div className='waa'>
            <div className="trendmoviecard">
        {watchlist.map((movie) => {
            return <Link to={`/movie/${movie.id}`} ><TrendingMovies poster_path={movie.poster_path} title={movie.title} /></Link>
        })}
    </div>
    </div>

    </div>
  )
}

export default Watchlist

import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import TrendingMovies from './TrendingMovies'
import logo from "./logo1.png"
import wvideo from "./wvideo.mp4"
const Watchlist = ({watchlist}) => {
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
            
                
          
            
       
      
             
        
        {watchlist.length == 0 ? <div>
           <div className='video'> 
            <video className='herovideo' loop autoPlay muted playsInline>
                    <source src={wvideo} type="video/mp4" />
            </video>
            </div>
            <div className='hurray'>
            Plot twist: Your watchlist has nothing to binge. <br />
            Cue the montage — it’s time to add some blockbusters.
            </div>
            </div>
      :  watchlist.map((movie) => {
          return <div className="trendmoviecard"><Link to={`/movie/${movie.id}`} ><TrendingMovies poster_path={movie.poster_path} title={movie.title} /></Link></div>
      })} 
   
    

    </div>
  )
}

export default Watchlist

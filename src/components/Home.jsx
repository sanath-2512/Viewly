
import "./Home.css"
import heroVideo from './hero.mp4';
import TrendingMovies from './TrendingMovies';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useRef } from "react";
const Home = () => {
  
  const [trendm,setTrendm] = useState([])
  const [upcoming,setupcoming] = useState([])
  const [toprated,settoprated] = useState([])
  const [nowplaying,setnowplaying] = useState([])
  const [popular,setpopular] = useState([])
  const trendRef = useRef(null);

  const scrollToTrend = () => {
    trendRef.current.scrollIntoView({ behavior: 'smooth' });
  } 
//   chatgpt ref
  
  async function trending (){
    
    const data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=e970e6cff0e95f81d9a04f1c5aca66bc`)
    const res = await data.json()
    setTrendm(res.results)
    const data1 = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=e970e6cff0e95f81d9a04f1c5aca66bc`)
    const res1 = await data1.json()
    setupcoming(res1.results)
    const data2 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=e970e6cff0e95f81d9a04f1c5aca66bc`)
    const res2 = await data2.json()
    settoprated(res2.results)

    const data3 = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=e970e6cff0e95f81d9a04f1c5aca66bc`)
    const res3 = await data3.json()
    setnowplaying(res3.results)

    const data4 = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=e970e6cff0e95f81d9a04f1c5aca66bc`)
    const res4 = await data4.json()
    setpopular(res4.results)
    
  }
  
  useEffect(() => {
    trending();
  },[])
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
      {/* // above this is my nav section*/}
      
      <div className='herosection'>
        <div>
           <div className='video'> 
                <video className='herovideo' loop autoPlay muted playsInline>
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>
            <div className='videocontent'>
                <h1>Discover. <span> Search.</span> Watch.</h1>
                <h2>Explore trending, top-rated, and hidden gems in one search.</h2>
                <button onClick={scrollToTrend}>Start Exploring</button>
            </div>
        </div>
      </div>
      {/* this code is for the video and discorver all that */}

    <div className='trend' ref={trendRef}>
        Trending Movies
    </div>
    <div className="trendmoviecard">
        {trendm.map((movie) => {
            return <Link to={`/movie/${movie.id}`} ><TrendingMovies poster_path={movie.poster_path} title={movie.title} /></Link>
        })}
    </div>
    <div className="trend">
        Upcoming Movies
    </div>
    <div className="trendmoviecard">
        {upcoming.map((movie) => {
            return <Link to={`/movie/${movie.id}`} ><TrendingMovies poster_path={movie.poster_path} title={movie.title} /></Link>
        })}
    </div>
    
    <div className="trend">
        Top Rated
    </div>
    <div className="trendmoviecard">
        {toprated.map((movie) => {
            return <Link to={`/movie/${movie.id}`} ><TrendingMovies poster_path={movie.poster_path} title={movie.title} /></Link>
        })}
    </div>
    <div className="trend">
        Now Playing
    </div>
    <div className="trendmoviecard">
        {nowplaying.map((movie) => {
            return <Link to={`/movie/${movie.id}`} ><TrendingMovies poster_path={movie.poster_path} title={movie.title} /></Link>
        })}
    </div>
    <div className="trend">
        Popular
    </div>
    <div className="trendmoviecard">
        {popular.map((movie) => {
            return <Link to={`/movie/${movie.id}`} ><TrendingMovies poster_path={movie.poster_path} title={movie.title} /></Link>
        })}
    </div>
    </div>
  )
}

export default Home

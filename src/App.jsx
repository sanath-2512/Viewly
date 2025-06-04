import React, { useEffect, useState } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Watchlist from './components/Watchlist';
import About from './components/About';
import Moviedetails from './components/Moviedetails';
import Trailer from './components/Trailer';
function App() {
  const [watchlist,setwatchlist] = useState(() => {
    const saved = localStorage.getItem("watchlist");
    return saved ? JSON.parse(saved) : [];
  })
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
  // local storeage is chatgpt
  function handlewatchlist(moviedetails) {
    let watch = [...watchlist,moviedetails]
    setwatchlist(watch)
  }
  function removefromwatchlist(moviedetails){
   const huhahuha =  watchlist.filter((movie) => movie.id !== moviedetails.id)
    setwatchlist(huhahuha)
  }
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/watchlist" element={<Watchlist watchlist ={watchlist}/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/movie/:id" element={<Moviedetails handlewatchlist={handlewatchlist} removefromwatchlist={removefromwatchlist} watchlist ={watchlist} />} />
      <Route path="/movie/:id/:key" element={<Trailer />} />
    </Routes>
  )
}

export default App

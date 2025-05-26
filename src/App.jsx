import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Watchlist from './components/Watchlist';
import About from './components/About';
import Contact from './components/Contact';
import Moviedetails from './components/Moviedetails';
import Trailer from './components/Trailer';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/watchlist" element={<Watchlist />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/movie/:id" element={<Moviedetails />} />
      <Route path="/movie/:id/:key" element={<Trailer />} />
    </Routes>
  )
}

export default App

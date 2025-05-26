import React from 'react'

import "./Home.css"
import { Link } from 'react-router-dom'

const Contact = () => {
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
    </div>
  )
}

export default Contact

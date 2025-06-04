import React from 'react'
import "./Home.css"
const TrendingMovies = ({title,poster_path}) => {
  return (
    <div 
    className="hello" 
    style={{ 
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`, 
      width: "13.5vw", 
      height: "20vw", 

      borderRadius: '0.5vw',
      backgroundSize: "cover",
      backgroundPosition:"center",
      backgroundRepeat: "no-repeat"
 
    }}
  >
  </div>
  )
}

export default TrendingMovies

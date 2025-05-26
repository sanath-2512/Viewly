import React from 'react'
import { useParams } from 'react-router-dom'
import "./Home.css"
const Trailer = () => {
    const {key} = useParams();
  return (
    <div>
        <iframe className='trailer' src={`https://www.youtube.com/embed/${key}`} 
        allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
        </iframe>
    </div>
  )
}
export default Trailer

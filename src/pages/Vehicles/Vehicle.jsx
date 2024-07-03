import React from 'react'
import { Link } from 'react-router-dom'
import "./vehicles.css"

export const Vehicle =({
    image,
    type,
    model,
    description,
    price,

}) =>{
  return (
    <div className="vehicle-card">
        <div className="image">
         <img src={image} alt="" />
         <p>Available</p>
         </div>
     <div className="vehicle-details">
           <div className="class">
            <h2>{type}</h2>
            <h3>{model}</h3>
            </div>
            <p className='available'>Availble</p>
            <p>{description}</p>
            <p className='vehicle-price'>{price}</p>
         <button className='vehicle-button'>book</button>

        </div>
    </div>
  )
}

export default Vehicle
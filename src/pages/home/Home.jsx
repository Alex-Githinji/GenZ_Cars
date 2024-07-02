import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import home from '../../assets/home.jpg'
import { FaCar } from "react-icons/fa";

function Home() {
  return (
    <section>
    <div className="home">
    <div className="hero">
      <h2>Welcome to GenZ Car Hire</h2>
      <p>Find the best rental deals for your journey</p>
    </div>
    <div className="section">
      <div className="section-content">
        <div className="description">
        <h2>Find what fits you</h2>
        <p>We deliver our best to our customers</p>
        </div>
        <img src={home} alt="a home image" className='home-img' />
      </div>
    </div>
  </div>
  <div className="section1">
      <div className="section-content1">
      <h3>Booking a car is so simple follow the steps bellow</h3>
      </div>
    </div>
    <div className="book">
    <div className="booking">
      <div className="booking-content">
        <div className="icon">
          <i className="fas fa-car"> <FaCar /></i>
        </div>
        
        <h2>One</h2>
        <p>Choose your car</p>
      </div>

      
    </div>
    <div className="booking">
      <div className="booking-content">
        <div className="icon">
          <i className="fas fa-car"> <FaCar /></i>
        </div>
        
        <h2>One</h2>
        <p>Choose your car</p>
      </div>

      
    </div>
    <div className="booking">
      <div className="booking-content">
        <div className="icon">
          <i className="fas fa-car"> <FaCar /></i>
        </div>
        
        <h2>One</h2>
        <p>Choose your car</p>
      </div>

      
    </div>
    </div>
  </section>



  )
}

export default Home



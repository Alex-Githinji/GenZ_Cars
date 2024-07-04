import React from "react";
import { Link } from "react-router-dom";
import "./vehicles.css";
import Booking from "../booking/Booking";

export const Vehicle = ({ image, type, model, description, price }) => {
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

        <p>{description}</p>
        <p className="vehicle-price">{price}</p>
        <button className="vehicle-button" onClick={Booking}>book</button>
      </div>
    </div>
  );
};

export default Vehicle;

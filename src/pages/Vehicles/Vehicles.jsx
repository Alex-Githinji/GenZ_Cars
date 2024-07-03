import React from "react";
import { Link } from "react-router-dom";
import {Vehicle} from "./Vehicle.jsx";
import "./vehicles.css"
import audi from "../../assets/audi.jpg"

function Vehicles() {
  return (
    <section>
  <div className="vehicles-banner">
    <h3>Gen z cars offers a secure, verified and transparent platform where cars can be traded however we are only liable for transactions made through the Kai & Karo offices and we don’t bear responsibility for third party transactions done outside our offices even in cases where a vehicle has been advertised on our website. Contact us via 0792832908 for any clarification.</h3>
  </div>
  <div className="vehicle">
    <Vehicle
    image={audi}
    type="AudI Q5"
    model= "3000cc  Automatic"
    description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
    price="ksh 6500 Per day"
    />
  </div>
  <div className="vehicle">
    <Vehicle
    image={audi}
    type="AudI Q5"
    model= "3000cc  Automatic"
    description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
    price="ksh 6500 Per day"
    />
  </div>
  <div className="vehicle">
    <Vehicle
    image={audi}
    type="AudI Q5"
    model= "3000cc  Automatic"
    description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
    price="ksh 6500 Per day"
    />
  </div>
  <div className="vehicle">
    <Vehicle
    image={audi}
    type="AudI Q5"
    model= "3000cc  Automatic"
    description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
    price="ksh 6500 Per day"
    />
  </div>
  </section>

      )
}

export default Vehicles;

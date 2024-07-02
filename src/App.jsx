import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/home/Home.jsx"
import Vehicles from "./pages/Vehicles/Vehicles.jsx"
import Contact from "./pages/contact/Contact.jsx";



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="Vehicles" element={<Vehicles />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

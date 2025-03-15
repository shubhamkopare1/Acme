import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import CodeBackground from "./components/CodeBackground";
 import Home from "./pages/Home";
 import './App.css'
import About from "./pages/About";
import Contact from "./pages/Contact";
// import EventInf from "./components/EventInfo";
import Event from "./pages/Event";
// import Sponsor from "./pages/Sponsor";
// import Admin from "./pages/Admin";
import Footer from "./components/Footer";

function App() {
  return (
    <>

<CodeBackground id="particles" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
          <Route path="/sponsor" element={<Event />} /> 
          <Route path="/event/:id" element={<Event />} />
  {/* <Route path="/admin" element={<Admin />} /> */}
       
      </Routes>
      <Footer/>
    </>
  );
}

export default App;


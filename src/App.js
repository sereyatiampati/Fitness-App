import React from "react";
import './App.css';
import NavBar from "./NavBar"
import Home from "./Home"
import OurServices from "./OurServices"
import Gallery from "./Gallery"
import ContactUs from "./ContactUs"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <OurServices />
      <Gallery />
      <ContactUs />
    </div>
  );
}

export default App;

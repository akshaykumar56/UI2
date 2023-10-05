import './App.css';
import React from 'react';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Service from './components/Service/Service'
import Project from './components/Project/Project'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

import InfiniteTrails from './components/ProjectPages/InfiniteTrails'
import HimachalDarpan from './components/ProjectPages/HimachalDarpan'
import Alpine from './components/ProjectPages/AlpineHoliday'
import Pergo from './components/ProjectPages/Pergo'
import EFruit from './components/ProjectPages/Efruit'
import CreativeCoaching from './components/ProjectPages/CreativeCoaching'
import SolitudeInn from './components/ProjectPages/SolitudeInn'
import Himco from './components/ProjectPages/Himco'
import IGMC from './components/ProjectPages/IGMC'
import BJP from './components/ProjectPages/BJP'
import PWD from './components/ProjectPages/PWD'
import RPL from './components/ProjectPages/RPL'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
        <Navbar/>   
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/services" element={<Service/>}/>
      <Route exact path="/projects" element={<Project/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/infinitetrails" element={<InfiniteTrails/>}/>
      <Route exact path="/himachaldarpan" element={<HimachalDarpan/>}/>
      <Route exact path="/alpine" element={<Alpine/>}/>
      <Route exact path="/pergo" element={<Pergo/>}/>
      <Route exact path="/efruit" element={<EFruit/>}/>
      <Route exact path="/creativecoaching" element={<CreativeCoaching/>}/>
      <Route exact path="/solitudeinn" element={<SolitudeInn/>}/>
      <Route exact path="/himcofed" element={<Himco/>}/>
      <Route exact path="/igmc" element={<IGMC/>}/>
      <Route exact path="/bjp" element={<BJP/>}/>
      <Route exact path="/pwd" element={<PWD/>}/>
      <Route exact path="/rpl" element={<RPL/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

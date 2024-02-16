import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/notestate";
import './App.css';
function App() {
  return (
    <NoteState>
    <BrowserRouter>
        <Navbar className='navbar1'/>
      <div className="mx-2">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
    </NoteState> 
  );
}

export default App;

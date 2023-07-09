import React from "react";
import Home from "./Pages/Home/Home"
import Sports from "./Pages/Sports/Sports"
import Politics from "./Pages/Politics/Politics"
import Entertainment from "./Pages/Entertainment/Entertainment";
import Navbar from "./Components/Navbar/Navbar";
import Searched from "./Pages/Searched/Searched"
import { Route, Routes } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar />

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sports" element={<Sports />} />
    <Route path="/politics" element={<Politics/>} />
    <Route path="/searched/:search" element={<Searched/>} />
    <Route path="/entertainment" element={<Entertainment />} />
    </Routes>
    </div>
  );
}

export default App;

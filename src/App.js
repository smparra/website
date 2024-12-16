import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Homescreen";
import NavBar from "./Pages/Home/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

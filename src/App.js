import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Admin from './Pages/Admin';
import Visitor from './Pages/Visitor';


function App() {
  let displayData
  const URL = "https://api.npoint.io/f39bd664969c4d3cf48c"
  function pullJson() {
    fetch(URL)
    .then(response => response.json())
    .then(responseData => {
        displayData = responseData.hotel_information.map(function(todo) {
          localStorage.setItem('hotel_information', JSON.stringify(todo))
        })
        displayData = responseData.booking_order;
        localStorage.setItem('booking_orders', JSON.stringify(displayData))
    })
}
useEffect(() => {

  pullJson()
}, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/visitor" element={<Visitor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

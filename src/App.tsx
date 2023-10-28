// import Navbar from "./components/Navbar"
import Home from "../src/pages/Home"
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Success from "./pages/Success";import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    // Track the current page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App

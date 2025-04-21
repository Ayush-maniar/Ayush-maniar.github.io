import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router> {/* Wrap with Router */}
      <div className="App">
        <Navbar />
        <Routes> {/* Define routes */}
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
        </Routes>
        {/* Contact component removed from direct rendering */}
        {/* Add a Footer component here if desired */}
      </div>
    </Router>
  );
}

export default App;

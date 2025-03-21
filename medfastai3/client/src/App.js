import React from 'react';
import Header from './components/Header'; // Import the Header component
import Navbar from './components/Navbar'; // Import the Navbar component
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Segmentation from './components/Segmentation';
import TumorDetection from './components/TumorDetection';
import XRayAnalysis from './components/XRayAnalysis';
import DiabetesDetection from './components/DiabetesDetection';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Contact from './Contact';
import Abstract from './Abstract';
import Dashboard from './Dashboard'; // Import the Dashboard component

function App() {
  return (
    <Router>
     
      <div className="App" style={{ margin: '20px 0' }}>
     

      </div>
       <Header />
      <div style={{ margin: '20px 0' }}></div> {/* Adding space between navbar and heading */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/abstract" element={<Abstract />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/segmentation" element={<Segmentation />} />
        <Route path="/tumor-detection" element={<TumorDetection />} />
        <Route path="/xray-analysis" element={<XRayAnalysis />} />
        <Route path="/diabetes-detection" element={<DiabetesDetection />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import VolumeCalculator from './components/VolumeCalculator';
import SecondaryDomainGenerator from './components/SecondaryDomainGenerator';
import EmailHeaderAnalyzer from './components/EmailHeaderAnalyzer';
import Footer from './components/Footer'; // Correct usage
import './App.css'; // Ensure you import your CSS file


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/volume-calculator" element={<VolumeCalculator />} />
        <Route path="/domain-generator" element={<SecondaryDomainGenerator />} />
        <Route path="/email-header-analyzer" element={<EmailHeaderAnalyzer />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

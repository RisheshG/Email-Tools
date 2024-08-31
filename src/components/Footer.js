// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import any specific CSS for Footer if needed

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>@ {currentYear} Rishesh Gangwar. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

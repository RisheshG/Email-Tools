import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="menu">
      <h1>Menu</h1>
      <button onClick={() => navigateTo('/volume-calculator')}>Volume Calculator</button>
      <button onClick={() => navigateTo('/domain-generator')}>Secondary Domain Name Generator</button>
      <button onClick={() => navigateTo('/email-header-analyzer')}>Email Header Analyzer</button>
    </div>
  );
};

export default MenuPage;

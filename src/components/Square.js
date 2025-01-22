import React from 'react';
import './Square.css';
import XImage from '../images/x.png';
import OImage from '../images/o.png';

function Square({ value, onClick }) {
  const renderContent = () => {
    if (value === 'X') {
      return <img src={XImage} alt="X" className="square-image" />;
    }
    if (value === 'O') {
      return <img src={OImage} alt="O" className="square-image" />;
    }
    return null;
  };

  return (
    <button className="square" onClick={onClick}>
      {renderContent()}
    </button>
  );
}

export default Square;

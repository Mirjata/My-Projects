import React from 'react';
import './styles.css';

const Button = ({ name, size, onClick }) => {
  const onButtonClick = () => {
    if (onClick) onClick();
  };

  return (
    <button className={`btn-${size}`} onClick={onButtonClick}>
      {name}
    </button>
  );
};

export default Button;

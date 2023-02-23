import React from 'react';
import './styles.css';

const Button = ({ name, color, icon, onClick }) => {
  const onButtonClick = () => {
    if (onClick) onClick();
  };

  return (
    <button className={`base ${color}`} onClick={onButtonClick}>
      <img src={icon} />
      {name}
    </button>
  );
};
export default Button;

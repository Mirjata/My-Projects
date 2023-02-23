import React from 'react';
import './styles.css';

const Title = ({ text, style, position, color }) => (
  <div className={`title-container title-container-${position}`}>
    <h3 className={`title-text-${style}`}>{text}</h3>
    <div className={`title-underline-${color}`} />
  </div>
);

export default Title;

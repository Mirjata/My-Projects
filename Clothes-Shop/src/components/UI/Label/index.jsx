import React from 'react';
import './styles.css';

const Label = ({ type, text }) => <p className={`base-label ${type}`}>{text}</p>;

export default Label;

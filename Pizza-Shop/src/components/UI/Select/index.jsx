import React, { useState } from 'react';
import { pizzaSizeOptions } from 'enums';
import './styles.css';

const SelectMenu = ({ onChange }) => {
  const [value, setValue] = useState('regular');

  const handleChange = event => {
    setValue(event?.target?.value);
    onChange(event?.target?.value);
  };

  return (
    <select className="select-menu" onChange={handleChange} value={value}>
      {pizzaSizeOptions.map((size, i) => (
        <option key={i} value={size.value}>
          {size.label}
        </option>
      ))}
    </select>
  );
};

export default SelectMenu;

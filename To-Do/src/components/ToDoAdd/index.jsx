import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import './styles.css';

const ToDoAdd = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleAdd = () => {
    if (!input) return;

    isFunction(onAdd) && onAdd({ name: input, time: new Date() });
    setInput('');
  };

  const handleKeyUp = event => event.keyCode === 13 && handleAdd();

  return (
    <section className="add-container">
      <input
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        className="input"
        type="text"
        placeholder="Note"
        value={input}
      />
      <button onClick={handleAdd} className="add-btn" disabled={!input}>
        +
      </button>
    </section>
  );
};

ToDoAdd.propTypes = {
  onAdd: PropTypes.func,
};

export default ToDoAdd;

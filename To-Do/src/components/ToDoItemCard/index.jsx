import React from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { FaTrash } from 'react-icons/fa';
import './styles.css';

const dateFormat = { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };

const ToDoItem = ({ onDelete, name, time }) => {
  const handleDelete = () => {
    isFunction(onDelete(time));
  };

  return (
    <li className="article-container">
      <div>
        <h4>{name}</h4>
        <p className="date-item">{time.toLocaleTimeString(undefined, dateFormat)}</p>
      </div>
      <button className="trash-btn">
        <FaTrash onClick={handleDelete} className="trash-icon" />
      </button>
    </li>
  );
};

ToDoItem.propTypes = {
  name: PropTypes.string,
  onDelete: PropTypes.func,
  time: PropTypes.object,
};

export default ToDoItem;

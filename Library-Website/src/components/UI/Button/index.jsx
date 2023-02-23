import React from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';

import { buttonContainer } from './styles';
import theme from '/theme/';

const Button = props => {
  const { children, onClick, disabled, className } = props;
  const buttonStyles = buttonContainer(props)(theme);

  const handleClick = e => {
    if (disabled) return e.preventDefault();
    isFunction(onClick) && onClick(e);
  };

  return (
    <button onClick={handleClick} css={buttonStyles} {...(className && { className })}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['primary', 'secondary']),
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.string,
  backColor: PropTypes.string,
  className: PropTypes.string,
};

export default Button;

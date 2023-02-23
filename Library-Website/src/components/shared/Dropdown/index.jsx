import React, { useState } from 'react';
import { MenuItems } from 'utils';
import { NavLink } from 'react-router-dom';
import { dropdownMenu, dropdownMenuClicked, dropdownLink } from './styles';
import './styles';

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul onClick={handleClick} css={click ? dropdownMenuClicked : dropdownMenu}>
        {MenuItems.map((item, index) => (
          <div key={index}>
            <li>
              <NavLink css={dropdownLink} className={item.className} to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </NavLink>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;

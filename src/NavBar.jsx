import React from 'react';

const NavBar = ({categories}) => {
  return (
    <ul style={{backgroundColor: `plum`, marginBlockStart: `0`, marginBlockEnd: `0`}}>
      {categories.map(category => 
        <li style={{display: `inline`, marginRight: `20px`}}>
          <a href={`#`}>
            {category}
          </a>
        </li>
      )}
    </ul>
  )
};

export default NavBar;

import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import themeContext from '../context/themeContext';

import Nav from './Nav';

const Header = () => {
  const { accentColor } = useContext(themeContext);

  return (
    <div className="header" style={{background:accentColor}}>
      <div className="bounds">
        <Link to="/">
          <h1 className="header--logo">MyApp</h1>
        </Link>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
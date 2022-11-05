import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

export default function Header(props) {
  return (
    <div className="header" style={{background:props.color}}>
      <div className="bounds">
        <Link to="/">
          <h1 className="header--logo">MyApp</h1>
        </Link>
        <Nav />
      </div>
    </div>
  );
};

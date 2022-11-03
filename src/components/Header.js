import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

export default function Header(props) {
  return (
    <div className="header">
      <div className="bounds">
        <Link to="/">
          <h1 className="header--logo">MyAuth</h1>
        </Link>
        <Nav user={props.user} />
      </div>
    </div>
  );
};

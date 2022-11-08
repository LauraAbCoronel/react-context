import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import themeContext from '../context/themeContext';
import userContext from '../context/userContext';

 const UserSignIn = () => {
  // Context
  const { actions } = useContext(userContext);
  const { accentColor } = useContext(themeContext);

  // State
  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  // Event Handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username: username.current.value,
      password: password.current.value
    }
    actions.signInUser(user);
    navigate("/");
  }

  const handleCancel = (event) => {
    event.preventDefault();
    navigate('/');
  }

  return (
    <div className="bounds">
      <div className="grid-33 centered signin">
        <h1>Sign In</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              id="username"
              required
              type="text"
              ref={username}
              placeholder="Username" />
            <input
              id="password"
              required
              type="password"
              ref={password}
              placeholder="Password" />
            <div className="pad-bottom">
              <button className="button" type="submit" style={{background:accentColor}}>Sign In</button>
              <button className="button button-secondary" style={{color:accentColor}} onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserSignIn;
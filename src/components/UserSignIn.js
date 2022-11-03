import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserSignIn(props) {
  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username: username.current.value,
      password: password.current.value
    }
    props.changeUser(user);
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
              <button className="button" type="submit">Sign In</button>
              <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
        <p>
          Don't have a user account? <Link to="/signup">Click here</Link> to sign up!
        </p>
      </div>
    </div>
  );
}

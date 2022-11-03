import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserSignUp(props) {
  const name = useRef(null);
  const username = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: name.current.value,
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
        <h1>Sign Up</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              required
              type="text"
              ref={name}
              placeholder="Name" />
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
          Already have a user account? <Link to="/signin">Click here</Link> to sign in!
        </p>
      </div>
    </div>
  );
}

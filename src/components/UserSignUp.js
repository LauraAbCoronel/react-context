import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserSignUp(props) {
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

  return (
    <div className="bounds">
      <div className="grid-33 centered signin">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="username"
            type="text"
            ref={username}
            placeholder="Username" />
          <input
            id="password"
            type="password"
            ref={password}
            placeholder="Password" />
          <div className="pad-bottom">
            <button className="button" type="submit">Sign In</button>
            <button className="button button-secondary">Cancel</button>
          </div>
        </form>
        <p>
          Already have a user account? <Link to="/signin">Click here</Link> to sign in!
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ user }) {
  return (
    <nav>
      {
        user ? (
          <>
            <span>Welcome, {user.username}!</span>
            <Link to="/signout">Sign Out</Link>
          </>
        ) : (
          <>
            <Link className="signup" to="/signup">Sign Up</Link>
            <Link className="signin" to="/signin">Sign In</Link>
          </>
        )
      }
    </nav>
  );
}
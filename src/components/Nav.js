import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/userContext";

export default function Nav() {
  const { user } = useContext(userContext);
  return (
    <nav>
      {
        user ? (
          <>
            <Link to="/settings">Settings</Link>
            <Link to="/signout">Sign Out</Link>
          </>
        ) : (
          <Link className="signin" to="/signin">Sign In</Link>
        )
      }
    </nav>
  );
}
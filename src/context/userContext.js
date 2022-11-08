import React, { useState } from "react";

const userContext = React.createContext({
  user: null,
  actions: {
    signInUser: (user) => { },
    signOutUser: () => { }
  }
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = {
    user,
    actions: {
      signInUser: (newUser) => setUser(newUser),
      signOutUser: () => setUser(null)
    }
  };

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  )
}

export default userContext;
import{ useState, createContext } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signInUser = (newUser) => {
    setUser(newUser)
  }

  const signOutUser = () => {
    setUser(null);
  }

  const value = {
    user,
    actions: {
      signInUser,
      signOutUser
    }
  };

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  )
}

export default userContext;
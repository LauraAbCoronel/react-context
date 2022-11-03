import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

// App Components
import Header from "./components/Header";
import Home from "./components/Home";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import UserSignOut from "./components/UserSignOut";
import NotFound from "./components/NotFound";
import userContext from "./context/userContext";

function App() {
  const [user, setUser] = useState(null);


  const changeUser = (user) => {
    setUser(user);
  }

  return (
    <userContext.Provider value={{user}}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/signin" element={<UserSignIn changeUser={changeUser} />} />
          <Route path="/signup" element={<UserSignUp changeUser={changeUser} />} />
          <Route path="signout" element={<UserSignOut signOutUser={() => changeUser(null)} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;

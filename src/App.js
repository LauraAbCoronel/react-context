import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";

// App Components
import Header from "./components/Header";
import Public from "./components/Public";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import UserSignOut from "./components/UserSignOut";
import NotFound from "./components/NotFound";

function App() {
  const [user, setUser] = useState(null);

  const changeUser = (user) => {
    setUser(user);
  }

  return (
    <div>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/signin" element={<UserSignIn changeUser={changeUser} />} />
        <Route path="/signup" element={<UserSignUp changeUser={changeUser} />} />
        <Route path="signout" element={<UserSignOut signOutUser={() => changeUser(null)} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

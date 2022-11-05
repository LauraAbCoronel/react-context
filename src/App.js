import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// App Components
import Header from "./components/Header";
import Home from "./components/Home";
import UserSignIn from "./components/UserSignIn";
import UserSignOut from "./components/UserSignOut";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";
import userContext from "./context/userContext";

function App() {
  const [user, setUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [accentColor, setAccentColor] = useState('#63537d');
  const [fontDelta, setFontDelta] = useState(100);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    document.body.style.fontSize = `${fontDelta}%`
  }, [isDarkMode,fontDelta]);

  const changeUser = (user) => {
    setUser(user);
  }

  const toggleDarkMode = () => {
    setIsDarkMode(currentMode => !currentMode);
  }

  const updateAccentColor = (color) => {
    setAccentColor(color);
  }

  return (
    <userContext.Provider value={{user}}>
      <div>
        <Header
          color={accentColor}
        />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="signin" element={<UserSignIn changeUser={changeUser} color={accentColor} />} />
          <Route path="signout" element={<UserSignOut signOutUser={() => changeUser(null)} />} />
          <Route path="settings" element={
            <Settings 
              user={user}
              toggleDarkMode={toggleDarkMode} 
              accentColor={accentColor}
              setAccentColor={updateAccentColor}
              fontDelta={fontDelta}
              setFontDelta={setFontDelta}/>
          }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;

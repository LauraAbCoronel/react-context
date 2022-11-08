import React, { useState, useEffect } from "react";

const themeContext = React.createContext({
  isDarkMode: false,
  accentColor: '#63537d',
  fontPercentage: 100
});

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [accentColor, setAccentColor] = useState('#63537d');
  const [fontPercentage, setFontPercentage] = useState(100);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    document.body.style.fontSize = `${fontPercentage}%`
  }, [isDarkMode,fontPercentage]);

  const value = {
    isDarkMode,
    accentColor,
    fontPercentage,
    actions: {
      toggleDarkMode: () => setIsDarkMode(currentMode => !currentMode),
      updateAccentColor: setAccentColor,
      updateFontPercentage: setFontPercentage
    }
  }

  return (
    <themeContext.Provider value={value}>
      {children}
    </themeContext.Provider>
  )
}

export default themeContext;
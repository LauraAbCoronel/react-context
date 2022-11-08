import { useState, useEffect, createContext } from "react";

const themeContext = createContext();

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

  const toggleDarkMode = () => {
    setIsDarkMode(currentMode => !currentMode);
  }

  const value = {
    isDarkMode,
    accentColor,
    fontPercentage,
    actions: {
      toggleDarkMode,
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
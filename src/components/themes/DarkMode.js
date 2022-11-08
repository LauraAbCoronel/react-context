import { useContext } from "react";
import themeContext from "../../context/themeContext";

const DarkMode = () => {
  // Context
  const { isDarkMode, actions } = useContext(themeContext);

  return (
    <div>
      <h3>Dark Mode</h3>
      <input 
        type='checkbox' 
        className="darkMode-selector" 
        checked={isDarkMode}
        onChange={() => actions.toggleDarkMode()}/>
    </div>
  );
}

export default DarkMode;
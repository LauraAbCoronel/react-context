import React from "react";

export default function DarkMode(props) {
  return (
    <div>
      <h3>Dark Mode</h3>
      <input type='checkbox' className="darkMode-selector" style={{background:props.color}} onChange={() => props.toggleDarkMode()}/>
    </div>
  );
}
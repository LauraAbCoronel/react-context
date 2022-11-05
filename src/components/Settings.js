import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DarkMode from "./themes/DarkMode";
import AccentColor from "./themes/AccentColor";
import FontSize from "./themes/FontSize";

export default function Settings(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.user === null) {
      navigate('/signin');
    }
  })

  return (
    <div className="bounds">
      <div className="grid-100">
        <h1>Preferences</h1>
        <DarkMode 
          fontDelta={props.fontDelta}
          toggleDarkMode={props.toggleDarkMode} 
          color={props.accentColor} />
        <AccentColor 
          fontDelta={props.fontDelta}
          accentColor={props.accentColor}
          setAccentColor={props.setAccentColor} />
        <FontSize
          fontDelta={props.fontDelta}
          setFontDelta={props.setFontDelta} />
      </div>
    </div>
  );
}
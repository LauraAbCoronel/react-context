import React from "react";
export default function AccentColor(props) {
  return (
    <div>
      <h3>Accent Color</h3>
      <input className="color-selector" type='color' value={props.accentColor} onChange={(e) => props.setAccentColor(e.target.value)} />
    </div>
  )
}
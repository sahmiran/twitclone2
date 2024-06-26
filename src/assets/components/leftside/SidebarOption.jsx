import React from "react";
import "./SidebarOption.css";

function SidebarOption({ text, Icon, active, setSecim, setActiveOption }) {
  const handleClick = (e) => {
    setSecim(text);
    setActiveOption(text);
    console.log(text);
  };

  return (
    <div
      onClick={handleClick}
      className={`sidebarOption ${active && "sidebarOption--active"}`}
    >
      {Icon && <Icon className="MuiSvgIcon-root" />}
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;

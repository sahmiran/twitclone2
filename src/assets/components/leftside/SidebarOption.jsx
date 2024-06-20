import React from "react";
import "./SidebarOption.css";

function SidebarOption({ text, Icon, active }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      {Icon && <Icon className="MuiSvgIcon-root" />}
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;

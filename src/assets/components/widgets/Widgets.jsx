import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="widgets_widgetContainer"></div>
    </div>
  );
}

export default Widgets;

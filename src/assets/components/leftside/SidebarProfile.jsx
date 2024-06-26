import React from "react";
import { Avatar, Button } from "@mui/material";
import "./SidebarProfile.css";

function SidebarProfile({ username, displayName, profileAvatar }) {
  return (
    <Button className="profilbutonu">
      <div className="profilbutonuContent">
        <div className="profilbutonAvatar">
          <Avatar src={profileAvatar} />
        </div>
        <div className="profilbutonText">
          <h3>{displayName}</h3>
          <span className="post_headerUsername">@{username}</span>
        </div>
      </div>
    </Button>
  );
}
export default SidebarProfile;

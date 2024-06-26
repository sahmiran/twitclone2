import React from "react";
import { Avatar, Button } from "@mui/material";
import "./SidebarProfile.css";

function SidebarProfile({ username, displayName }) {
  return (
    <Button className="profilbutonu">
      <div className="profilbutonuContent">
        <div className="profilbutonAvatar">
          <Avatar />
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

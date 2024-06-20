import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import XIcon from "@mui/icons-material/X";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupIcon from "@mui/icons-material/Group";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PendingIcon from "@mui/icons-material/Pending";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <XIcon />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={CheckBoxOutlineBlankIcon} text="Grok" />
      <SidebarOption Icon={ListAltIcon} text="List" />
      <SidebarOption Icon={BookmarkIcon} text="Bookmark" />
      <SidebarOption Icon={GroupIcon} text="Communities" />
      <SidebarOption Icon={XIcon} text="Premium" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={PendingIcon} text="More" />
      {/* button -> twet  */}
      <Button variant="outlined" className="sidebar-send">
        Send
      </Button>
    </div>
  );
}

export default Sidebar;

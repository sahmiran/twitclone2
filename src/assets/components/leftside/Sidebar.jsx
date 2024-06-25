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
      <XIcon className="xicon" />
      <SidebarOption active to="" Icon={HomeIcon} text="Home" />
      <SidebarOption to="" Icon={SearchIcon} text="Explore" />
      <SidebarOption to="" Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption to="" Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption to="" Icon={CheckBoxOutlineBlankIcon} text="Grok" />
      <SidebarOption to="" Icon={ListAltIcon} text="List" />
      <SidebarOption to="" Icon={BookmarkIcon} text="Bookmark" />
      <SidebarOption to="" Icon={GroupIcon} text="Communities" />
      <SidebarOption to="" Icon={XIcon} text="Premium" />
      <SidebarOption to="" Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption to="" Icon={PendingIcon} text="More" />
      {/* button -> tweet  */}
      <Button variant="outlined" className="sidebar-send">
        POST
      </Button>
    </div>
  );
}

export default Sidebar;

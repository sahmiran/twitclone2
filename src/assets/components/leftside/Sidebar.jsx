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
      <SidebarOption to="/app/home" Icon={HomeIcon} text="Home" />
      <SidebarOption to="/app/explore" Icon={SearchIcon} text="Explore" />
      <SidebarOption
        to="/app/notifications"
        Icon={NotificationsIcon}
        text="Notifications"
      />
      <SidebarOption
        to="/app/messages"
        Icon={MailOutlineIcon}
        text="Messages"
      />
      <SidebarOption
        to="/app/grok"
        Icon={CheckBoxOutlineBlankIcon}
        text="Grok"
      />
      <SidebarOption to="/app/list" Icon={ListAltIcon} text="List" />
      <SidebarOption to="/app/bookmark" Icon={BookmarkIcon} text="Bookmark" />
      <SidebarOption
        to="/app/communities"
        Icon={GroupIcon}
        text="Communities"
      />
      <SidebarOption to="/app/premium" Icon={XIcon} text="Premium" />
      <SidebarOption to="/app/profile" Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption to="/app/more" Icon={PendingIcon} text="More" />
      {/* button -> tweet  */}
      <Button variant="outlined" className="sidebar-send">
        POST
      </Button>
    </div>
  );
}

export default Sidebar;

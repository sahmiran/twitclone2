import React, { useState } from "react";
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
import SidebarProfile from "./SidebarProfile";

function Sidebar({ username, displayName, profileAvatar, setSecim }) {
  const [activeOption, setActiveOption] = useState("Home");

  return (
    <div className="sidebar">
      <XIcon className="xicon" />
      <SidebarOption
        to=""
        Icon={HomeIcon}
        text="Home"
        setSecim={setSecim}
        setActiveOption={setActiveOption}
        active={activeOption === "Home"}
      />
      <SidebarOption
        to=""
        Icon={SearchIcon}
        text="Explore"
        setSecim={setSecim}
        setActiveOption={setActiveOption}
        active={activeOption === "Explore"}
      />
      <SidebarOption
        to=""
        Icon={NotificationsIcon}
        text="Notifications"
        setSecim={setSecim}
        setActiveOption={setActiveOption}
        active={activeOption === "Notifications"}
      />
      <SidebarOption
        to=""
        Icon={MailOutlineIcon}
        text="Messages"
        setSecim={setSecim}
        setActiveOption={setActiveOption}
        active={activeOption === "Messages"}
      />
      <SidebarOption
        to=""
        Icon={CheckBoxOutlineBlankIcon}
        text="Grok"
        setSecim={setSecim}
        setActiveOption={setActiveOption}
        active={activeOption === "Grok"}
      />
      <SidebarOption
        to=""
        Icon={ListAltIcon}
        text="List"
        setSecim={setSecim}
        active={activeOption === "List"}
        setActiveOption={setActiveOption}
      />
      <SidebarOption
        to=""
        Icon={BookmarkIcon}
        text="Bookmark"
        setSecim={setSecim}
        setActiveOption={setActiveOption}
        active={activeOption === "Bookmark"}
      />
      <SidebarOption
        to=""
        Icon={GroupIcon}
        text="Communities"
        setSecim={setSecim}
        setActiveOption={setActiveOption}
        active={activeOption === "Communities"}
      />
      <SidebarOption
        to=""
        Icon={XIcon}
        text="Premium"
        setSecim={setSecim}
        setActiveOption={setActiveOption}
        active={activeOption === "Premium"}
      />
      <SidebarOption
        to=""
        Icon={PermIdentityIcon}
        text="Profile"
        setSecim={setSecim}
        setActiveOption={setActiveOption}
        active={activeOption === "Profile"}
      />
      <SidebarOption
        to=""
        Icon={PendingIcon}
        text="More"
        setSecim={setSecim}
        setActiveOption={setActiveOption}
        active={activeOption === "More"}
      />
      {/* button -> tweet  */}
      <Button variant="outlined" className="sidebar-send">
        POST
      </Button>
      <SidebarProfile
        username={username}
        displayName={displayName}
        profileAvatar={profileAvatar}
      />
    </div>
  );
}

export default Sidebar;

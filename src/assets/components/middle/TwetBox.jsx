import React from "react";
import "./TwetBox.css";
import { Avatar, Button } from "@mui/material";
function TwetBox() {
  return (
    <div className="twetBox">
      <form>
        <div className="twetBox_input">
          <Avatar></Avatar>
          <input placeholder="What is happening?" type="text" />
        </div>
        <Button className="twetBox_twetButton">Post</Button>
      </form>
    </div>
  );
}

export default TwetBox;

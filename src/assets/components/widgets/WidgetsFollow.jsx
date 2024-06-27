import React from "react";
import "./WidgetsFollow.css";
import { Avatar, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
function WidgetsFollow({ posts }) {
  return (
    <div className="widgetsfollower">
      <h1 className="followHead">Who to follow</h1>
      {posts
        .filter((post) => !post.isNew)
        .map((post, index) => (
          <div className="followers" key={index}>
            <div>
              {" "}
              <Avatar src={post.avatar} />{" "}
            </div>
            <div className="followNameKutusu">
              {" "}
              <h4>
                {post.displayName}
                {post.verified && <VerifiedIcon className="verify_badge" />}
              </h4>
              <p className="usernameP">@{post.username}</p>
            </div>
            <div className="beyazButonKutusu">
              <Button className="beyazFollowButonlar">
                <p> Follow </p>
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
}
export default WidgetsFollow;

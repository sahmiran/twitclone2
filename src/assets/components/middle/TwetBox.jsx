import React, { useState } from "react";
import "./TwetBox.css";
import { Avatar, Button } from "@mui/material";
function TwetBox({ addPost }) {
  const [tweetMessage, setTweetMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweetMessage) {
      const newPost = {
        displayName: "Pelooo",
        username: "Pelopeloo",
        verified: false,
        text: tweetMessage,
        image: "",
        avatar: "",
      };
      addPost(newPost);
      setTweetMessage("");
    }
  };

  return (
    <div className="twetBox">
      <form onSubmit={handleSubmit}>
        <div className="twetBox_input">
          <Avatar></Avatar>
          <input
            placeholder="What's happening?"
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <Button type="submit" className="twetBox_twetButton">
          Post
        </Button>
      </form>
    </div>
  );
}
export default TwetBox;

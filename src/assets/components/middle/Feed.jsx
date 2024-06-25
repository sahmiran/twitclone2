import React from "react";
import "./Feed.css";
import TwetBox from "./TwetBox";
import Post from "./Post";

function Feed({ posts, addPost }) {
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TwetBox addPost={addPost} />
      {posts &&
        posts.map((post, index) => (
          <Post
            key={index}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
    </div>
  );
}

export default Feed;

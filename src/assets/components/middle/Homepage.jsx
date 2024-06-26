import React, { useState } from "react";
import Sidebar from "../leftside/Sidebar";
import Feed from "./Feed";
import Widgets from "../widgets/Widgets";
import "./Homepage.css";

const initialPosts = [
  {
    displayName: "Mahmut",
    username: "Mahmut",
    verified: true,
    text: "Mahmut'un twitter Clone demo maceraları 1",
    image:
      "https://staticg.sportskeeda.com/editor/2023/11/27d3b-16996554432517-1920.jpg",
    avatar: "",
  },
  {
    displayName: "Ahmet",
    username: "Ahmet",
    verified: false,
    text: "Ahmet'in twitter Clone demo maceraları",
    image:
      "https://staticg.sportskeeda.com/editor/2023/11/27d3b-16996554432517-1920.jpg",
    avatar: "",
  },
  {
    displayName: "Mehmet",
    username: "Mehmet",
    verified: true,
    text: "Mehmet'in twitter Clone demo maceraları",
    image:
      "https://staticg.sportskeeda.com/editor/2023/11/27d3b-16996554432517-1920.jpg",
    avatar: "",
  },
  {
    displayName: "Ayşe",
    username: "Ayşe",
    verified: false,
    text: "Ayşe'nin twitter Clone demo maceraları",
    image:
      "https://staticg.sportskeeda.com/editor/2023/11/27d3b-16996554432517-1920.jpg",
    avatar: "",
  },
  {
    displayName: "Fatma",
    username: "Fatma",
    verified: true,
    text: "Fatma'nın twitter Clone demo maceraları",
    image:
      "https://staticg.sportskeeda.com/editor/2023/11/27d3b-16996554432517-1920.jpg",
    avatar: "",
  },
];

function Homepage() {
  const [posts, setPosts] = useState(initialPosts);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="homepageContent">
      <Sidebar
        username={posts[0]?.username}
        displayName={posts[0]?.displayName}
      />
      <Feed posts={posts} addPost={addNewPost} />
      <Widgets />
    </div>
  );
}

export default Homepage;

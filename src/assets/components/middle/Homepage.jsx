import React, { useState } from "react";
import Sidebar from "../leftside/Sidebar";
import Feed from "./Feed";
import Widgets from "../widgets/Widgets";
import "./Homepage.css";
import { useLocation } from "react-router-dom";

const initialPosts = [
  {
    displayName: "Mahmut",
    username: "Mahmut",
    verified: true,
    text: "Mahmut'un twitter Clone demo maceraları 1",
    image:
      "https://staticg.sportskeeda.com/editor/2023/11/27d3b-16996554432517-1920.jpg",
    avatar:
      "https://randompicturegenerator.com/img/dog-generator/ge10fa7297cc721f7042cd8c741581080ac5fa78eb6a03dfa1c57b3b557daeee52f6ccf30c1962afff577ed37d0df9714_640.jpg",
  },
  {
    displayName: "Ahmet",
    username: "Ahmet",
    verified: false,
    text: "Ahmet'in twitter Clone demo maceraları",
    image:
      "https://randompicturegenerator.com/img/cat-generator/g37b82da0af399ee430f5787f93289fa6bf0cee78a334568707574b938b0c2dd44c1e6505904a70b5cb55dbb1f3116639_640.jpg",
    avatar:
      "https://randompicturegenerator.com/img/dog-generator/g55e9922a6fed0a1241e3f727698432e8101105e21feadac426898693e200f73fb1672892ba68e86ba10af641f035bf5f_640.jpg",
  },
  {
    displayName: "Mehmet",
    username: "Mehmet",
    verified: true,
    text: "Mehmet'in twitter Clone demo maceraları",
    image:
      "https://randompicturegenerator.com/img/cat-generator/g092093bef7d7a9b913a0a8f62f90c8b728d022f67a0b852a2652870db07a03798424082570652864e8f91d0ff26167f3_640.jpg",
    avatar:
      "https://randompicturegenerator.com/img/dog-generator/ga6cfa18f65a5097bd356ecd360794b91979405112cb9fec549a586ed12c2b3874e49b83b870204e69ed6d4c1e8ab41b2_640.jpg",
  },
  {
    displayName: "Ayşe",
    username: "Ayşe",
    verified: false,
    text: "Ayşe'nin twitter Clone demo maceraları",
    image:
      "https://randompicturegenerator.com/img/cat-generator/g8be4f19009a23cb99f2d8ccf42cdc37eb756f6e38227a98e467104acc0e2b549e85bd547762fc005ad4966ca0c6d5356_640.jpg",
    avatar:
      "https://randompicturegenerator.com/img/dog-generator/g9d2b430c90bf10afc78e598640fec969221fc7f34596a1bc693e6e4d301f1bbc932ed5add92df5ece6cf00503a6f3a1d_640.jpg",
  },
  {
    displayName: "Fatma",
    username: "Fatma",
    verified: true,
    text: "Fatma'nın twitter Clone demo maceraları",
    image:
      "https://randompicturegenerator.com/img/cat-generator/gffac7d89a6766193920012ecea55e5faf3d8494670322109af3ec828743b7462bd13326ea1d2f24cc64e871021abab1b_640.jpg",
    avatar: "https://picsum.photos/200/",
  },
];
const profileAvatar =
  "https://randompicturegenerator.com/img/lion-generator/g8e943d28d3e1ebd2c6e489e9e0d341bbb0c55a0cdae13c451eec9f7aec5dc63d6b7589715ab9d3e9e259c6a7ed8573af_640.jpg";

function Homepage() {
  const location = useLocation();
  const { username, displayName } = location.state;

  const [posts, setPosts] = useState(initialPosts);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="homepageContent">
      <Sidebar
        username={username}
        displayName={displayName}
        profileAvatar={profileAvatar}
      />
      <Feed
        posts={posts}
        addPost={addNewPost}
        username={username}
        displayName={displayName}
        profileAvatar={profileAvatar}
      />
      <Widgets />
    </div>
  );
}
export default Homepage;

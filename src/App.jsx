import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./assets/components/leftside/Sidebar";
import Feed from "./assets/components/middle/Feed";
import Widgets from "./assets/components/widgets/Widgets";
import Login from "./assets/components/login/Login";
const postData = [
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/app"
          element={
            <div className="app">
              <Sidebar />
              <Feed posts={postData} />
              <Widgets />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

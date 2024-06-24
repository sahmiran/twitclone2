import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./assets/components/leftside/Sidebar";
import Feed from "./assets/components/middle/Feed";
import Widgets from "./assets/components/widgets/Widgets";
import Login from "./assets/components/login/Login";

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
              <Feed />
              <Widgets />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

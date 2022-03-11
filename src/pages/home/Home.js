import React from "react";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";

function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}

export default Home;

import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css"

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
              <div className="profileCover">
                  <img src="/assets/cover.jpg" alt="cover img" className="profileCoverImg" />
                  <img src="/assets/person/1.jpeg" alt="erosn" className="profileUserImg" />
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">Dogay Sakarya</h4>
                  <p className="profileInfoDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eos perspiciatis incidunt accusantium velit cumque perferendis veritatis corrupti quis explicabo provident vel animi magni, aliquid quae optio praesentium fugiat et.
                  </p>

              </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

import React from "react";
import "./share.css";
// import { PermMedia, Label , Room, EmojiEmotions } from "@mui/icons-material";

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/person/1.jpeg"
            alt="person"
            className="shareProfileImg"
          />
          <input
            type="text"
            placeholder="What's your mind Otabek"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
            <i className="fas fa-photo-video"></i>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
            <i className="fas fa-tags"></i>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
            <i className="fas fa-map-marker-alt"></i>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
            <i className="fas fa-grin"></i>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;

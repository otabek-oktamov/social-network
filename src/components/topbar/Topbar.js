import React from 'react';
import "./topbar.css"
function Topbar() {
    return (
        <>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo"> Social media</span>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <img alt="imp" className="searchIcon" src="/assets/icons/search.png" width="20" height="20" />
                        <input placeholder="Search for friend , post or video" className="searchInput" />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <img alt="person" src="/assets/icons/person.png" width="25" height="25" />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                        <img alt="chat" src="/assets/icons/char.png" width="23" height="23" />
                            <span className="topbarIconBadge">9</span>
                        </div>
                        <div className="topbarIconItem">
                        <img alt="person" src="/assets/icons/notification.png" width="20" height="20" />
                            <span className="topbarIconBadge">3</span>
                        </div>
                    </div>
                    <img src="/assets/person/1.jpeg" alt="person img" className="topbarImg" />
                </div>
            </div>
        </>
    )
}

export default Topbar

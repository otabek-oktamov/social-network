import React from 'react'
import './sidebar.css'
import { Users } from '../../dummyData'
import CloseFreind from '../closeFreind/CloseFreind'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <i className="sidebarIcon fas fa-rss-square"></i>
                        <span className="sidebarListItemText"> Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <i className="sidebarIcon fas fa-comments"></i>
                        <span className="sidebarListItemText"> Chats</span>
                    </li>
                    <li className="sidebarListItem">
                    <i className="sidebarIcon fas fa-film"></i>
                        <span className="sidebarListItemText"> Videos</span>
                    </li>
                    <li className="sidebarListItem">
                    <i className="sidebarIcon fas fa-users"></i>
                        <span className="sidebarListItemText"> Groups</span>
                    </li>
                    <li className="sidebarListItem">
                    <i className=" sidebarIcon fas fa-bookmark"></i>
                        <span className="sidebarListItemText"> Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                    <i className=" sidebarIcon fas fa-question"></i>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                    <i className=" sidebarIcon fas fa-suitcase"></i>
                        <span className="sidebarListItemText"> Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                    <i className=" sidebarIcon fas fa-calendar"></i>
                        <span className="sidebarListItemText"> Events</span>
                    </li>
                    <li className="sidebarListItem">
                    <i className="sidebarIcon fas fa-graduation-cap"></i>
                        <span className="sidebarListItemText"> Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton"> show more</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFreindList">
                    {Users.map((u) => (
                        <CloseFreind key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar

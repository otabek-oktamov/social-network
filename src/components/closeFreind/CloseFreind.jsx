import React from 'react'
import "./closeFreind.css"

function CloseFreind({user}) {
    return (
        <li className="sidebarFreind">
                        <img className="sidebarFreindImg" src={user.profilePicture}/>
                        <span className="sidebarFreindName">{user.username}</span>
                    </li>
    )
}

export default CloseFreind

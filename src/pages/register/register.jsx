import React from 'react'
import './register.css'

function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MayoqHub Social</h3>
                    <span className="loginDesc"><b>MayoqHub Social</b> is a new era of messaging and is so simple you already know how to use it.</span>
                </div>
<div className="loginRight">
    <div className="loginBox">
    <input type="text" className="loginInput" placeholder="Your Username"  required/>
        <input type="email" className="loginInput" placeholder="Your Email" required/>
        <input type="password" className="loginInput" placeholder="Your Password" required/>
        <button className="loginButton">Sign Up</button>
        <button className="loginRegisterButton">Log into your account</button>
    </div>
</div>
            </div>
        </div>
    )
}

export default Register

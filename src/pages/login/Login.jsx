import React from 'react'
import './login.css'

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MayoqHub Social</h3>
                    <span className="loginDesc"><b>MayoqHub Social</b> is a new era of messaging and is so simple you already know how to use it.</span>
                </div>
<div className="loginRight">
    <div className="loginBox">
        <input type="email" className="loginInput" placeholder="Your Email" />
        <input type="password" className="loginInput" placeholder="Your Password" />
        <button className="loginButton">Log In</button>
        <span className="loginForgot">Forgot password</span>
        <button className="loginRegisterButton">Create new account</button>
    </div>
</div>
            </div>
        </div>
    )
}

export default Login

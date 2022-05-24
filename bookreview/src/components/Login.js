import React from 'react'
import Navbar from './Navbar'

function Login() {
  return (
    <div>
        <Navbar/>
        <h3 class="title text-center">Login</h3>
        <div class="login-container text">
        <form action="" id="loginform" method="POST">
        <input type="email" name="email" id="email" placeholder='Email'/>
        <input type="password" name="password" id="password" placeholder='Password'></input>
        <button id="login-button">Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login
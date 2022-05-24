import React from 'react'
import Navbar from './Navbar'

function Signup() {
  return (
    <div>
        <Navbar/>
        <div class="login-container text">
        <form action="" id="loginform" method="POST">   
            <input type="text" name="firstname" id="firstname" placeholder='First name'/>
            <input type="text" name="lastname" id="lastname" placeholder='Last name'/>
            <input type="email" name="email" id="email" placeholder='Email'/>
            <input type="password" name="password" id="password" placeholder='Password'/>
            <input type="password" name="confirmpassword" id="confirmpassword" placeholder='Confirm password'/><br/>
            <input type="checkbox" id="terms-and-conditions-check"/>I have read and agree to the <br/> <a href="">Terms and Conditions</a><br/>
            <button id="signup-button">Sign Up</button>
        </form>
    </div>
    </div>
  )
}

export default Signup
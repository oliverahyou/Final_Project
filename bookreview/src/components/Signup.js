import React from 'react'
import Navbar from './Navbar'

function Signup() {
  return (
    <div>
        <div class="logincontainer">
        <a href="/"><h4>Book<strong>Review</strong></h4></a>

        <form action="" id="signupform" method="POST">  
          <h3 class="title text-center">Sign Up</h3>
          <label for="firstname" class="formlabels">First name</label><br/> 
          <input class="inputfields" type="text" name="firstname" id="firstname" placeholder=''/><br/>
          <label for="firstname" class="formlabels">Last name</label><br/> 
          <input class="inputfields" type="text" name="lastname" id="lastname" placeholder=''/><br/>
          <label for="firstname" class="formlabels">Email</label><br/> 
          <input class="inputfields" type="email" name="email" id="email" placeholder=''/>
          <label for="firstname" class="formlabels">Password</label><br/> 
          <input class="inputfields" type="password" name="password" id="password" placeholder=''/>
          <label for="firstname" class="formlabels">Confirm password</label><br/> 
          <input class="inputfields" type="password" name="confirmpassword" id="confirmpassword" placeholder=''/><br/>
          <input type="checkbox" id="terms-and-conditions-check"/>I have read and agree to the <br/> <a href="">Terms and Conditions</a><br/>
          <button id="signup-button">Sign Up</button>
        </form>
    </div>
    </div>
  )
}

export default Signup
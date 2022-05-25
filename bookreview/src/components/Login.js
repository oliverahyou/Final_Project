import React from 'react'

function Login() {
  return (
    <div>
        <div class="logincontainer">
        <a href="/"><h4>Book<strong>Review</strong></h4></a>
        <form action="" id="loginform" method="POST">
          
          
          <h3 class="title text-center">Login</h3>

          <label for="email" class="formlabels">Email</label><br/> 
          <input class="inputfields" type="email" name="email" id="email" placeholder=''/><br/>
          <label for="password" class="formlabels">Password</label><br/> 
          <input class="inputfields" type="password" name="password" id="password" placeholder=''></input>
          <button id="login-button">Login</button>
        </form>
        
        </div>
        
        
    </div>
  )
}

export default Login
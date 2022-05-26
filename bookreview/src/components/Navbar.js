import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Style.css';


function Navbar() {
  return (
    <div>
        
        <nav class="navbar fixed-top navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><Link to="/"><h4>Book<strong>Review</strong></h4></Link></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/browse"><Link to="/browse">Browse</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/reviews"><Link to="/reviews">Reviews</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login"><Link to="/login">Login</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup"><Link to="/signup">Sign Up</Link></a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search book..." aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
</nav><hr/>
</div>
  )
}

export default Navbar;
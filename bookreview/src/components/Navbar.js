import React from 'react'
import { Link } from 'react-router-dom';
import '../components/Homepage.css'


function Navbar() {
  return (
    <div>
        
        <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"><Link to="/">book<strong>Review</strong></Link></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="browse.html"><Link to="/browse">Browse</Link></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Community
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="review.html">Reviews</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="forum.html">Forum</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/login">Login</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/signup">Sign Up</Link></a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search book..." aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
</nav><hr/></div>
  )
}

export default Navbar
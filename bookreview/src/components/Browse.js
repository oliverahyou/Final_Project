import React from 'react'
import book from '../images/thelastbrother.jpg'
import book2 from '../images/theprisonerofparadise.jpg'
import book3 from '../images/theprospector.jpg'
import book4 from '../images/eveoutofherruins.jpg'
import book5 from '../images/silentwindsdryseas.jpg'
import book6 from '../images/kayadays.jpg'
import Navbar from './Navbar';
import Browse_accordion from './Browse_accordion'

function Browse() {
  return (
    <div>
      <Navbar/>
      <Browse_accordion/>

    <div class="books-container">
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book2} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="bookandtext">
          <a href=""><img class="books-all" src={book3} alt=""/></a>
          <div class="book-details">
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
          </div>
          <button>Reviews</button>
          <button>Buy</button>
          
        </div>
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book4} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book5} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book6} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
    </div>
    </div>
  )
}

export default Browse
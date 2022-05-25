import React from 'react'
import book from '../images/thelastbrother.jpg'
import book2 from '../images/theprisonerofparadise.jpg'
import book3 from '../images/theprospector.jpg'
import book4 from '../images/eveoutofherruins.jpg'
import book5 from '../images/silentwindsdryseas.jpg'
import book6 from '../images/kayadays.jpg'
import book7 from '../images/goldenbatsandpinkpigeons.jpg'
import book8 from '../images/theinterrogation.jpg'
import Navbar from './Navbar';
import Browse_accordion from './Browse_accordion'
import Footer from './Footer'

function Browse() {
  return (
    <div>
      <Navbar/>
      <Browse_accordion/>

    <div class="books-container">
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book} alt=""/></a>
              <div class="books-text text-left">
                <strong><p>Title:</p></strong>
                <strong><p>Author:</p></strong>
                <strong><p>Description:</p></strong>
              </div>
              <button class="reviewbutton">Reviews</button>
            <button class="buybutton">Buy</button>

        </div>
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book2} alt=""/></a>
            <div class="books-text text-left">
                <strong><p>Title:</p></strong>
                <strong><p>Author:</p></strong>
                <strong><p>Description:</p></strong>
              </div>
              <button class="reviewbutton">Reviews</button>
            <button class="buybutton">Buy</button>

        </div>
        <div class="bookandtext">
          <a href=""><img class="books-all" src={book3} alt=""/></a>
          <div class="books-text text-left">
                <strong><p>Title:</p></strong>
                <strong><p>Author:</p></strong>
                <strong><p>Description:</p></strong>
              </div>
              <button class="reviewbutton">Reviews</button>
            <button class="buybutton">Buy</button>

          
        </div>
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book4} alt=""/></a>
            <div class="books-text text-left">
                <strong><p>Title:</p></strong>
                <strong><p>Author:</p></strong>
                <strong><p>Description:</p></strong>
              </div>
              <button class="reviewbutton">Reviews</button>
            <button class="buybutton">Buy</button>

        </div>
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book5} alt=""/></a>
            <div class="books-text text-left">
                <strong><p>Title:</p></strong>
                <strong><p>Author:</p></strong>
                <strong><p>Description:</p></strong>
              </div>
              <button class="reviewbutton">Reviews</button>
            <button class="buybutton">Buy</button>
        </div>
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book6} alt=""/></a>
            <div class="books-text text-left">
                <strong><p>Title:</p></strong>
                <strong><p>Author:</p></strong>
                <strong><p>Description:</p></strong>
              </div>
              <button class="reviewbutton">Reviews</button>
            <button class="buybutton">Buy</button>

        </div>
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book7} alt=""/></a>
            <div class="books-text text-left">
                <strong><p>Title:</p></strong>
                <strong><p>Author:</p></strong>
                <strong><p>Description:</p></strong>
              </div>
              <button class="reviewbutton">Reviews</button>
            <button class="buybutton">Buy</button>
        </div>
        <div class="bookandtext">
            <a href=""><img class="books-all" src={book8} alt=""/></a>
            <div class="books-text text-left">
                <strong><p>Title:</p></strong>
                <strong><p>Author:</p></strong>
                <strong><p>Description:</p></strong>
              </div>
              <button class="reviewbutton">Reviews</button>
            <button class="buybutton">Buy</button>
        </div>
        
    </div>
    <Footer/>
    </div>
  )
}

export default Browse
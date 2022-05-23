import React from 'react'
import book from '../images/book-example.jpg'
import Navbar from './Navbar';

function Browse() {
  return (
    <div>
      <Navbar/>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <h3>Category</h3>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                
                <a href=""><p>Fiction</p></a>
                <a href=""><p>Science Fiction</p></a>
                <a href=""><p>Adventure</p></a>
                <a href=""><p>Romance</p></a>
                <a href=""><p>Thriller</p></a>
                <a href=""><p>Biography</p></a>
                <a href=""><p>Personal Development</p></a>
                <a href=""><p>History</p></a>
                <a href=""><p>Religion & Spirituality</p></a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h3 class="accord-title">Author</h3>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <h3 class="accord-title" >Rating</h3>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              
            </div>
            
          </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <h3 class="accord-title">Price</h3>
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                
              </div>
              
            </div>
        </div>
    </div>

    <div class="books-container">
        <div class="book-img">
            <a href=""><img src={book} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="book-img">
            <a href=""><img src={book} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="book-img">
            <a href=""><img src={book} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="book-img">
            <a href=""><img src={book} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="book-img">
            <a href=""><img src={book} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="book-img">
            <a href=""><img src={book} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="book-img">
            <a href=""><img src={book} alt=""/></a>
            <strong><p>Title:</p></strong>
            <strong><p>Author:</p></strong>
            <strong><p>Description:</p></strong>
            <button>Reviews</button>
            <button>Buy</button>
        </div>
        <div class="book-img">
            <a href=""><img src={book} alt=""/></a>
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
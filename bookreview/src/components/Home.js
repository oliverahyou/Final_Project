import React from 'react'
import { Link } from 'react-router-dom';
import '../components/Style.css'
import book from '../images/thelastbrother.jpg'
import book2 from '../images/theprisonerofparadise.jpg'
import book3 from '../images/theprospector.jpg'
import book4 from '../images/eveoutofherruins.jpg'
import book5 from '../images/silentwindsdryseas.jpg'
import book6 from '../images/kayadays.jpg'
import Navbar from './Navbar';

function Home() {

  return (
<div>
    <Navbar/>

      <div class="featured-container">
        <a href=""><img class="featured-books" src={book2} alt="Suggested book"/></a>
        <a href=""><img class="featured-books" src={book3} alt="Suggested book"/></a>
        <a href=""><img class="featured-books" src={book4} alt="Suggested book"/></a>
        <a href=""><img class="featured-books" src={book5} alt="Suggested book"/></a>
        <a href=""><img class="featured-books" src={book6} alt="Suggested book"/></a>        
      </div>
      <hr/>
      
      <div class="featured-container-main">
        <a href=""><img src={book} alt="Suggested book" id="main-featured"/></a>
        <div class="featured-info text-left">
            <p><strong>Title:</strong> The Last Brother</p>
            <p><strong>Author:</strong> Nathacha Appanah</p>
            <p><strong>Category:</strong> Local</p>
            <p class="text-justify"><strong>Description:</strong> In The Last Brother by Nathacha Appanah, 1944 is coming to a close and nine-year-old Raj is unaware of the war devastating the rest of the world. He lives in Mauritius, a remote island in the Indian Ocean, where survival is a daily struggle for his family. When a brutal beating lands Raj in the hospital of the prison camp where his father is a guard, he meets a mysterious boy his own age. David is a refugee, one of a group of Jewish exiles whose harrowing journey took them from Nazi occupied Europe to Palestine, where they were refused entry and sent on to indefinite detainment in Mauritius.</p>
            <p><strong>Average rating:</strong></p>
            <div class="featured-buttons">
              <a href=""><button>Reviews</button></a> 
              <a href="https://www.amazon.com/Last-Brother-Translation-Selection-Paperback/dp/1555975755/ref=sr_1_2?crid=3Q5XG6EKHGYIQ&keywords=the+last+brother&qid=1652950418&s=books&sprefix=the+lost+brother%2Cstripbooks-intl-ship%2C352&sr=1-2" target="_blank"><button>Buy</button></a>
            </div>
        </div>
        <div class="discover-text">Discover your next favourite book!</div>
    </div>

    <div class="categories-container">
        
        <div><h3 class="categoriesTitle">Categories:</h3></div>
        <div class="div-categories">
            <a href=""><p class="categories">Local</p></a>
            <a href=""><p class="categories">Fiction</p></a>
            <a href=""><p class="categories">Fantasy</p></a>
            <a href=""><p class="categories">Romance</p></a>
            <a href=""><p class="categories">Thriller</p></a>
            <a href=""><p class="categories">Biography</p></a>
            <a href=""><p class="categories">Personal Development</p></a>
            <a href=""><p class="categories">History</p></a>
            <a href=""><p class="categories">Science Fiction</p></a>
        </div>
        
    </div>
</div>

  )
}

export default Home;
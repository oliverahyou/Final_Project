import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import books from './books';

function convert_picture_link(link){
    if (link.includes('drive.google')){
        link = link.replace('file/d/', 'uc?export=view&id=').replace('/view?usp=sharing', '');
    }
    return link
}
function Reviews() {
    let collection = '';

    for (let book of books) {
        collection +=
            `<div class="bookandtext">
                <a href=${book.review_link}>
                    <img class="books-all" src=${convert_picture_link(book.img)} alt=""/>
                </a>

                <div class="books-text text-left">
                  <p><strong>Title:</strong>${book.title}</p>
                  <p><strong>Author:</strong>${book.author}</p>
                  <p><strong>Description:</strong>${book.desc}</p>
                </div>
                
                <a href=${book.review_link}>
                     <button class="reviewbutton">Review</button>
                </a>
                
            </div>`
    }

    return (
      <div>
          <h2>Reviews</h2>
          <Navbar/>

          <div class="books-container" dangerouslySetInnerHTML={{__html: `${collection}`}} />
          <Footer/>
      </div>
  )
}

export default Reviews;
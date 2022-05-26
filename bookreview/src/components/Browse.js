import React from 'react'
import Navbar from './Navbar';
import Browse_accordion from './Browse_accordion'
import Footer from './Footer'
import books from "./books";

function convert_picture_link(link){
    if (link.includes('drive.google')){
        link = link.replace('file/d/', 'uc?export=view&id=').replace('/view?usp=sharing', '');
    }
    return link
}

function Browse() {
    let collection = '';

    for (let book of books) {
        collection +=
            `<div class="bookandtext">
                <a href=${book.review_link}>
                    <img class="books-all" src=${convert_picture_link(book.img)} alt=""/>
                </a>

                <div class="books-text text-left">
                  <p><strong>Title:${book.title}</strong></p>
                  <p><strong>Author:${book.author}</strong></p>
                  <p><strong>Description:</strong>${book.desc}</p>
                </div>
                
                <a href=${book.review_link}>
                     <button class="reviewbutton">Reviews</button>
                </a>
                <a href=${book.buy_link} target="_blank">
                     <button class="buybutton">Buy</button>
                </a>
            </div>`
    }

    return (
      <div>
          <Navbar/>
          <Browse_accordion/>

          <div class="books-container" dangerouslySetInnerHTML={{__html: `${collection}`}} />
          <Footer/>
      </div>
  )
}

export default Browse


// let div_container = document.createElement('div');
//
// for (let book of books){
//     let div_book = document.createElement('div');
//     let anchor_book = document.createElement('a');
//     let img_book = document.createElement('img');
//     let text_book = document.createElement('div');
//     let p_title = document.createElement('p');
//     let p_author = document.createElement('p');
//     let p_desc = document.createElement('p');
//     let btn_review = document.createElement('button');
//     let btn_buy = document.createElement('button');
//
//     div_book.className = "bookandtext";
//     anchor_book.href = book.link;
//     img_book.className = "books-all";
//     img_book.src = book.img;
//     img_book.alt = book.img;
//     anchor_book.appendChild(img_book);
//
//     p_title.innerText = `Author: ${book.title}`;
//     p_author.innerText = `Author: ${book.author}`;
//     p_desc.innerText = `Author: ${book.desc}`;
//
//     text_book.style.fontWeight = 'bold';
//
//     text_book.appendChild(p_title);
//     text_book.appendChild(p_author);
//     text_book.appendChild(p_desc);
//
//     btn_review.className = "reviewbutton";
//     btn_buy.className = "buybutton";
//
//     div_book.appendChild(anchor_book);
//     div_book.appendChild(text_book);
//     div_book.appendChild(btn_review);
//     div_book.appendChild(btn_buy);
//     div_container.appendChild(div_book);
// }
//
// console.log(div_container)
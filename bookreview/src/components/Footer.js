import React from 'react';

function Footer(){
    return(
        <div>
            <div class="categories-container">
        
        <div><h3 class="categoriesTitle">Categories:</h3></div>
        <div class="div-categories">
            <a href="/browse"><p class="categories">Local</p></a>
            <a href="/browse"><p class="categories">Fiction</p></a>
            <a href="/browse"><p class="categories">Fantasy</p></a>
            <a href="/browse"><p class="categories">Romance</p></a>
            <a href="/browse"><p class="categories">Thriller</p></a>
            <a href="/browse"><p class="categories">Biography</p></a>
            <a href="/browse"><p class="categories">Personal Development</p></a>
            <a href="/browse"><p class="categories">History</p></a>
            <a href="/browse"><p class="categories">Science Fiction</p></a>
        </div>
        
    </div>
        </div>
    )
}
export default Footer;
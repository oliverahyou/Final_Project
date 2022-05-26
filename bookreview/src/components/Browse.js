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
let books = [
      
  {title: ""},
  {author: ""},
  {description: ""},
  {category: ""},
  {price: ""},

]
books.forEach(detail, i)

function Browse() {
  return (
    <div>
      <Navbar/>
      <Browse_accordion/>

    
    
        
    
    <Footer/>
    </div>
  )
}

export default Browse
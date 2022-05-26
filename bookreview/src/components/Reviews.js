import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import book from '../images/thelastbrother.jpg'

function Reviews(){
    return(
        <div>
            <Navbar/>

            <div>
                <div><img src={book} class="reviewimage"></img></div>
                <div>
                    <p></p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Reviews
import React from "react"


function BrowseAccordion(){
    return(
        <div>

            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <h5>By Category</h5>
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="accord-cat">
                            <a href="/browse_local"><p>Local</p></a>
                            <a href=""><p>Fiction</p></a>
                            <a href=""><p>Fantasy</p></a>
                            <a href=""><p>Romance</p></a>
                            <a href=""><p>Thriller</p></a>
                            <a href=""><p>Biography</p></a>
                            <a href=""><p>Personal Development</p></a>
                            <a href=""><p>History</p></a>
                            <a href=""><p>Science Fiction</p></a>
                        </div>
                    </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h5 class="accord-title" >By Rating</h5>
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="star-container">
                            <div class="fivestar">
                                <a href=""><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></a>
                            </div>
                            <div class="fourstar">
                               <a href=""><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></a>
                            </div>
                            <div class="threestar">
                                <a href=""><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></a>
                            </div>
                            <div class="twostar">
                                <a href=""><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></a>
                            </div>
                            <div class="onestar">
                                <a href=""><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h5 class="accord-title">By Price</h5>
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="byprice">
                            <a href=""><p>Less than <strong>MUR 250</strong></p></a>
                            <a href=""><p>Less than <strong>MUR 500</strong></p></a>
                            <a href=""><p>Less than <strong>MUR 750</strong></p></a>
                            <a href=""><p>Less than <strong>MUR 1000</strong></p></a>
                            <a href=""><p>Less than <strong>MUR 1250</strong></p></a>
                            <a href=""><p>More than <strong>MUR 1250</strong></p></a>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default BrowseAccordion;
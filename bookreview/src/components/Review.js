import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import book from '../images/thelastbrother.jpg'

function Review(){
    return(
        <div>
            <Navbar/>
            <h2>"The Last Brother" by Nathacha Appanah </h2>
            <div class="review-container">
                <div class="reviewitem">
                    <img src={book} class="reviewimage" alt="Book reviewed"></img>

                    <div class="review_bookdetails text-justify">
                        <p><b>Title:</b> The Last Brother</p>
                        <p><b>Author:</b> Nathacha Appanah</p>
                        <p><b>Description:</b> In The Last Brother by Nathacha Appanah, 1944 is coming to a close and nine-year-old Raj is unaware of the war devastating the rest of the world. He lives in Mauritius, a remote island in the Indian Ocean, where survival is a daily struggle for his family. When a brutal beating lands Raj in the hospital of the prison camp where his father is a guard, he meets a mysterious boy his own age. David is a refugee, one of a group of Jewish exiles whose harrowing journey took them from Nazi occupied Europe to Palestine, where they were refused entry and sent on to indefinite detainment in Mauritius.</p>
                        <p><b>Category:</b> Local</p>
                        <p><b>Price:</b> MUR 700</p>
                        <p><b>Total votes:</b> 2</p>
                        <p><b>Average rating:</b> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p>
                        <button class="buybutton">Buy</button>
                        <button class="createbutton">Create review</button>
                    </div>

                </div>
                <div class="commentcontainer">
                    <div class="reviewcomment text-justify">
                        <p><strong>Rohan Bissessar:</strong> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p> 
                        <p><i>"This beautifully written novel is the melancholy reminiscence of a 70-year-old Mauritian named Raj, of his brief friendship with Jewish orphan David, when both were 10-year-old boys in 1944. David, a native of Czechoslovakia, ended up in the Beau-Bassin detention camp in 1940, after the refugee ship he was on fleeing the Nazis was turned away from Palestine by the British and sent to Mauritius. Recuperating from a savage beating by his alcoholic and abusive father at the hospital in the camp, where his father was a guard, Raj met David, who was being treated for malaria, and eventually helped him escape, driven to fill the loneliness left by the deaths of his brothers in a terrible cyclone. Appanah creates a vivid sense of a time and place far from my experience, but familiar territory in its exploration of childhood, family, friendship, loss, and regret."</i></p>
                    </div><hr/>
                    <div class="reviewcomment text-justify">
                        <p><strong>Vincent Pontil:</strong> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p> 
                        <p><i>"First of all, I enjoyed the unusual setting of this novel--Mauritius. I knew it was an island off the coast of Africa, but not much else. Found out it was the home of the now extinct dodo! Much of this story takes place in the northern section of the island. Though the book is adult, the story is told from the point of view of Raj, a young boy, or, I should say, Raj as an old man looking back on that time. The story is set in 1944, and is based on a true event concerning Jews who were interned on the island. After Raj's brothers die in a terrible flash flood, his father gets a job as a guard at the camp where the Jews are being held. There Raj befriends a Jewish boy, David, and even helps him escape. The story takes on a rather surreal quality here. Raj knows nothing about World War II or the Holocaust, so he has no idea of the danger he and David are in as they play in the jungle, while the reader is holding his breath, knowing it can't end well but hoping somehow that it will. Appanah, a journalist who was born on Mauritius, toward the end provides information on what happened to the real shipload of Jews brought to the island. I would like to explore the facts more, and wish she had provided a list of her sources. I enjoyed the way she writes, and would like to read more of her books. Recommended!"</i></p>
                    </div>
                </div>
            </div>
            
            
            <Footer/>
        </div>
    )
}
export default Review;
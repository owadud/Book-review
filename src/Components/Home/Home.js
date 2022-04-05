import React, { useEffect, useState } from 'react';
import './Home.css';
import Review from '../Review/Review';
import useReview from '../../hooks/useReview';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const [reviews, setReview] = useReview();

    return (
        <div>
            <div className='home-container'>
                <div className="site-description">
                    <div>
                        <h2>Check Our Review</h2>
                        <p>
                            Welcome to our website! Please give your valuable review and also you can see others review in our website.
                        </p>
                    </div>


                </div>
                <div className="site-img">
                    <img src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="book" />
                </div>
            </div>

            <div className="book-review">

                <h1>Book Review</h1>
                {
                     reviews.map(review =><div className='review-list'>
                     <div className='profile'><img src={review.picture} alt="" />
                     
                     </div>
                     <div>
                     <p>By {review.name} <span>&nbsp;</span><FontAwesomeIcon style={{color:'yellow'}} icon={faStar}
                      /><FontAwesomeIcon style={{color:'yellow'}} icon={faStar}
                      /><FontAwesomeIcon style={{color:'yellow'}} icon={faStar}
                      /><FontAwesomeIcon style={{color:'yellow'}} icon={faStar}
                      /><FontAwesomeIcon style={{color:'yellow'}} icon={faStar}
                      />
                     </p>
                     <p className="comment">Comment:<span>&nbsp;</span>{review.comment}</p>
                     </div>
                      
                     
                 </div>)
                }
                <Link to={"/review"}><button>All reviews</button></Link>
            </div>

        </div>
    );
};

export default Home;
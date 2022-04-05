import React from 'react';
import useReview from '../../hooks/useReview';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Review = () => {

    const [reviews,setReview] =useReview();
    return (
        <div className='book-review'>
            <h1>Check Our All Book Review</h1>
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
                    <p className="comment">Comment: <span>&nbsp;</span>{review.comment}</p>
                    </div>
                     
                    
                </div>)
                }
        </div>
    );
};

export default Review;
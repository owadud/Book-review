import React from 'react';
import './Home.css';

const Home = () => {
    return (
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
    );
};

export default Home;
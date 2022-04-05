import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className="blog-container">
            <div className="semantic-tag">
                <h1>What does semantic-tag mean?</h1>
                <p>A semantic element clearly describes its meaning to both the browser and the developer.Its help to allows data to be shared and reused across applications, enterprises, and communities</p>
                <p>Examples of non-semantic elements: 'div and span tag - Tells nothing about its content.</p>
                <p>some semantic elements</p>
                <ul>
                    <li>header</li>
                    <li>main</li>
                    <li>nav</li>
                    <li>section</li>
                    <li>footer</li>
                </ul>
            </div>
            <div className="inline-block">
                <h1>Differences between Inline and Block Elements!</h1>
                <p>A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.A block-level element always takes up the full width available. You set width or height</p>

                <p>
                An inline element does not start on a new line.An inline element only takes up as much width as necessary. You can't set width or height.
                </p>
                <p>Inline block just like the inline element where it does not start on a new line. But you can set width or height.</p>
            </div>
        </div>
    );
};

export default Blog;
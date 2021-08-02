import React from 'react';
import './book-list-item.css'

const BookListItem =({book})=>{

    const{title, author,price, coverImage} = book;

    return(
        <div className= "book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt='cover'/>
            </div>
            <div className="book-details">
                <span className="book-title">{title}</span>
                <div className='book-author'>Author: {author}</div>
                <div className='book-price'>{`Price: $${price}`}</div>
                <button className=' btn btn-info add-to-cart'>Add to Cart</button>
            </div>
        </div>
    )
}
export default BookListItem
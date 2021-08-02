import React from 'react';
import BookList from '../book-list/';
import './home-page.css';

const HomePage =()=>{

    return(
        <div className='jumbotron'>
            <BookList books ={[]}/>
        </div>
    )
}
export {HomePage}
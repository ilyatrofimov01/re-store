import React from 'react';
import BookListContainer from '../book-list/';
import './home-page.css';
import ShoppingCartTable from'../../components/shopping-cart-table'

const HomePage =()=>{

    return(
        <div className='jumbotron'>
            <BookListContainer />
            <ShoppingCartTable/>
        </div>
    )
}
export {HomePage}
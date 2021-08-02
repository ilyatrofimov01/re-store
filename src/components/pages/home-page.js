import React from 'react';
import BookList from '../book-list/';
import './home-page.css';
import ShoppingCartTable from'../../components/shopping-cart-table'

const HomePage =()=>{

    return(
        <div className='jumbotron'>
            <BookList />
            <ShoppingCartTable/>
        </div>
    )
}
export {HomePage}
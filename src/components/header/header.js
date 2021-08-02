import React from 'react';
import './header.css'

const Header = ({orderedItems, total}) =>{

    return(
        <div className="header d-flex">
            <a className='logo text-dark' href='/'> ReStore </a>
            <a href='/cart/' className='shopping-cart'>
            <i className="cart-icon fa fa-shopping-cart" aria-hidden="true"/>
            {orderedItems} items (${total})
            </a>
        </div>
    )
}
export default Header
import React from 'react';
import {Link} from 'react-router-dom'
import './header.css'

const Header = ({orderedItems, total}) =>{

    return(
        <div className="header d-flex">
            <Link className='logo text-dark' to='/'> ReStore </Link>
            <Link to='/cart/' className='shopping-cart'>
            <i className="cart-icon fa fa-shopping-cart" aria-hidden="true"/>
            {orderedItems} items (${total})
            </Link>
        </div>
    )
}
export default Header
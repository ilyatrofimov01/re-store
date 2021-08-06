import React, {Fragment as main} from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import {connect} from 'react-redux'
import Header from '../header';
import './app.css'


const App = ({cartItems,total}) =>{
 
    const orderedItems = cartItems.reduce((acc,curr)=>{
        acc = acc + curr.count;
        return acc;
    },0)
    return(
        <main role ='main' className='container'>
        <Header orderedItems={orderedItems} total ={total}/>
        
            <Switch>    
                <Route path='/' component ={HomePage} exact/>
                <Route path='/cart/' component ={CartPage}/> 
                <Route render={()=><h2 className='jumbotron'>Page not found</h2>}/>
            </Switch>
        </main>
    )
}

const mapStateToProps= ({shoppingCart:{cartItems, orderTotal}}) => {
    return{
        cartItems,
        total: orderTotal
    }
}

export default connect (mapStateToProps,)(App)

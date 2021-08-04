import React, {Fragment as main} from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import Header from '../header';
import './app.css'


const App = () =>{
 

    return(
        <main role ='main' className='container'>
        <Header orderedItems={5} total ={200}/>
        
            <Switch>    
                <Route path='/' component ={HomePage} exact/>
                <Route path='/cart/' component ={CartPage}/> 
                <Route render={()=><h2 className='jumbotron'>Page not found</h2>}/>
            </Switch>
        </main>
    )
}
export default App

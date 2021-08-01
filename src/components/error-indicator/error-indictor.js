import React from 'react';
import icon from './error-img.png'
import './error-indicator.css'

const ErrorIndicator = () =>{
    return(
        <div className="error-indicator">
            <img src={icon} alt='error icon'/>
            <h2 className='error'>Woops!</h2>
            <span>Something was Wrong</span>
            <span>We will fix it in near time</span>
        </div>
    );
}
export default ErrorIndicator
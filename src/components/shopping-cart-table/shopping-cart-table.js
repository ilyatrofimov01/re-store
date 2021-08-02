import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable =() =>{

  
    return(
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Production-Ready Microservices</td>
                        <td>2</td>
                        <td>$100</td>
                        <td>
                            
                            <button
                            //  onClick={() => onDelete(id)}
                                className="btn btn-outline-danger btn-sm float-right">
                                <i className="fa fa-trash-o" />
                            </button>

                            <button
                            //  onClick={() => onIncrease(id)}
                                className="btn btn-outline-success btn-sm float-right">
                                <i className="fa fa-plus-circle" />
                            </button>

                            <button
                            // onClick={() => onDecrease(id)}
                                className="btn btn-outline-warning btn-sm float-right">
                                <i className="fa fa-minus-circle" />
                            </button>

                        </td>
                    </tr>
                </tbody>
            </table>

            <div className='total'>$201</div>
        </div>
    );
}
export default ShoppingCartTable
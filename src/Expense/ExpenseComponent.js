import React from 'react';
import './ExpenseComponent.css';
import ExpenseDate from './ExpenseDate';

import Cards from '../Utils/Cards';

const ExpenseComponent = (props) => {

     
    return(
        <li>
        <Cards className="expense-item">

            <ExpenseDate date={props.date}/>

           <div className=".expense-item__description">
                <h1>{props.name}</h1>
                <div className="expense-item__price">{props.cost}</div>
           </div>

        </Cards>
        </li>
    ) ;

    
}

export default ExpenseComponent;
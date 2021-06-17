import React from 'react';
import ExpenseComponent from './ExpenseComponent.js';
import './ExpenseList.css';

const ExpenseList = (props) => {

    if(props.item.length === 0)  {
        return <h2 className="expenses-list__fallback">No Record Found .</h2>
    }


    return (
        <ul className="expenses-list">
         {   props.item.map( (item)  => 
                  
                    <ExpenseComponent 
                    date={item.date} 
                    name={item.name} 
                    cost={item.price} 
                    key={item.id}
                    />
                )
        
         }
        </ul>
    )
}

export default ExpenseList;
import React , {useState} from 'react';
import './ExpenseComponent.css';
import ExpenseDate from './ExpenseDate';

import Cards from '../Utils/Cards';

const ExpenseComponent = (props) => {

    const [title , setTitle] = useState(props.name);

   const clickHandler = () => {
    setTitle('Updated');
       console.log("Clicked");
   }
     
    return(
        <Cards className="expense-item">

            <ExpenseDate date={props.date}/>

           <div className=".expense-item__description">
                <h1>{title}</h1>
                <div className="expense-item__price">{props.cost}</div>
           </div>

           <button onClick={clickHandler} type="submit">Change</button>
        </Cards>
    ) ;

    
}

export default ExpenseComponent;
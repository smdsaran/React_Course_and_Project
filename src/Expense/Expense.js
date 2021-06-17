import React , {useState} from 'react';

import Cards from '../Utils/Cards';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

import "./Expense.css";

const Expense = (props) => {

  const [filteredYear , setFilteredYear] = useState('2021');

  const expenseFilter = (filterFromExpenseFilter) => {
    setFilteredYear(filterFromExpenseFilter);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
    
  });

  console.log(filteredExpenses);


  // let expenseData = <p style={{color: "white"}}>No Record Found .</p> ;

  // if(filteredExpenses.length > 0 ) {
  //   expenseData = filteredExpenses.map( item  => { 
  //                 return(
  //                   <ExpenseComponent 
  //                   date={item.date} 
  //                   name={item.name} 
  //                   cost={item.price} 
  //                   key={item.id}
  //                   />
  //                 )}
  //               )
  // }

    return (
      <Cards className="expenses">

        <ExpenseFilter selected={filteredYear} onChangeFilter={expenseFilter}/>

        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList item={filteredExpenses}/>   
        
        </Cards>
    );

}



export default Expense;


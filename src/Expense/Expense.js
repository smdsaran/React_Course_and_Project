import React , {useState} from 'react';
import ExpenseComponent from './ExpenseComponent.js';
import Cards from '../Utils/Cards';
import ExpenseFilter from './ExpenseFilter';
import "./Expense.css";

const Expense = (props) => {

  const [filteredYear , setFilteredYear] = useState('2021');

  const expenseFilter = (filterFromExpenseFilter) => {
    setFilteredYear(filterFromExpenseFilter);
  }

    return (
      <Cards className="expenses">

        <ExpenseFilter selected={filteredYear} onChangeFilter={expenseFilter}/>
        <ExpenseComponent 
        date={props.expenses[0].date} 
        name={props.expenses[0].name} 
        cost={props.expenses[0].price}>
        </ExpenseComponent>

        <ExpenseComponent 
        date={props.expenses[1].date} 
        name={props.expenses[1].name} 
        cost={props.expenses[1].price}>
        </ExpenseComponent>

        <ExpenseComponent 
        date={props.expenses[2].date} 
        name={props.expenses[2].name} 
        cost={props.expenses[2].price}>
        </ExpenseComponent>

      </Cards>
    );

}


export default Expense;


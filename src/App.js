import React from 'react';
//import React-Dom from 'react-dom';

import Expense from './Expense/Expense.js';
import NewExpense from './NewExpense/NewExpense.js';

import Cards from './Utils/Cards';

import './App.css';
import "./Expense/Expense.css";

function App() {

const expenses = [
    {
      date: new Date("02 ,11 , 2000") ,
      name: "book" ,
      price: "$ 200"
    } ,

    {
      date: new Date("02 ,11 , 2000") ,
      name: "ball" ,
      price: "$ 20"
    } ,

    {
      date: new Date("02 ,11 , 2000") ,
      name: "pen" ,
      price: "$ 2"
    }


  ]

  const newExpenseSave = (newExpenseFromNewExpense) => {

    const newExpenseInApp = {
      ...newExpenseFromNewExpense
    }

    console.log(newExpenseInApp);
  }

  return (
  <Cards className="expenses">
    <NewExpense onNewExpense = {newExpenseSave}/>
    <Expense expenses={expenses} />
  </Cards>
  );
}

export default App;

import React , {useState} from 'react';
//import React-Dom from 'react-dom';

import Expense from './Expense/Expense.js';
import NewExpense from './NewExpense/NewExpense.js';

import Cards from './Utils/Cards';

import './App.css';
import "./Expense/Expense.css";

let INITIAL = [
  {
    id: 's1' ,
    date: new Date("02 ,11 , 2000") ,
    name: "book" ,
    price: "$ 200"
  } ,

  {
    id: 's2' ,
    date: new Date("02 ,11 , 2000") ,
    name: "ball" ,
    price: "$ 20"
  } ,

  {
    id: 's3' ,
    date: new Date("02 ,11 , 2021") ,
    name: "pen" ,
    price: "$ 2"
  }


]

function App() {

  const [expenses , setExpenses] = useState(INITIAL);

  const newExpenseSave = (newExpenseFromNewExpense) => {

    const newExpenseInApp = {
      ...newExpenseFromNewExpense
    }

    setExpenses((prevState) => {
      return (
        [newExpenseInApp , ...prevState]
      )
    })

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

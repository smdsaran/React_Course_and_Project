import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveNewExpense = (newExpenseFromExpenseForm) => {
    const newExpenseInNewExpense = {
      ...newExpenseFromExpenseForm ,
      id: Math.random().toString()
    }

    props.onNewExpense(newExpenseInNewExpense);

    // console.log(newExpenseInNewExpense);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveNewData = {saveNewExpense}/>
    </div>
  );
};

export default NewExpense;
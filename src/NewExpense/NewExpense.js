import React , {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing , setIsEditing] = useState('false');

  const saveNewExpense = (newExpenseFromExpenseForm) => {
    const newExpenseInNewExpense = {
      ...newExpenseFromExpenseForm ,
      id: Math.random().toString()
    }

    props.onNewExpense(newExpenseInNewExpense);

    setIsEditing('false');

    // console.log(newExpenseInNewExpense);
  }

  const startEditingHandler = () => {
    setIsEditing('true');
  }

  const doCancel = () => {
    setIsEditing('false');
  }

  return (
    <div className='new-expense'>

      {isEditing === 'false' && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEditing === 'true' && (
        <ExpenseForm 
        onSaveNewData = {saveNewExpense} 
        onCancel={doCancel}/>
      )}
      
    </div>
  );
};

export default NewExpense;
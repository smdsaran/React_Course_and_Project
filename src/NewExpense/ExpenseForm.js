import React , {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle , setEnteredTitle] =  useState('');
  const [enteredAmount , setEnteredAmount] =  useState('');
  const [enteredDate , setEnteredDate] =  useState('');

//  const [enteredInput , setEnteredInput] = useState({
//     enteredTitle:'' ,
//     enteredAmount:'' ,
//     enteredDate: ''
//   });

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);

    // setEnteredInput({
    //   ...enteredInput ,
    //   enteredTitle: event.target.value
    // })

    // setEnteredInput( (prevState) => {
    //   return {...prevState ,enteredTitle: event.target.value}
    // } );
  }

  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);

    // setEnteredInput({
    //   ...enteredInput ,
    //   enteredAmount: event.target.value
    // })
  }

  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);

    // setEnteredInput({
    //   ...enteredInput ,
    //   enteredDate: event.target.value
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpenseInExpenseForm = {
      name: enteredTitle,
      date: new Date(enteredDate), 
      price: enteredAmount
    }

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    props.onSaveNewData(newExpenseInExpenseForm);

    // console.log(newExpenseInExpenseForm);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
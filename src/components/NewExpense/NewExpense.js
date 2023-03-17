import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  // data handler function
  const SaveExpenseDataHandler =
  //  function
    (enteredExpenseData) => {
      // expense data
    const expenseData = {
   ...enteredExpenseData,
      id: Math.random().toString()
    }
      console.log(expenseData);
      // calling the function defined in the App.js file
      props.onAddExpense(expenseData);
    }
  // return
  return (
    <div className='new-expense'>
<ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler}></ExpenseForm>
  </div>
)
}

export default NewExpense;
import React, { useState } from "react";
import "./ExpenseForm.css";
// ExpenseForm
const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // event handler function
  // input
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  // amount
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  // date
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
  //  combined state
    const expenseData = {
      title: enteredtitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
   setEnteredDate('');
  };
  // return
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {/*input  */}
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredtitle} onChange={titleChangeHandler} />
        </div>
        {/*amount  */}
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
         
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

/*
Whenever you update state and you depend on previous state
you should not do it like this:

setUserInput({
  ...userInput,
  enteredTitle: event.target.value
})

---------------------------------------------------
You should call it and pass an function to that function

setUserInput((prestate) => {
// It will recieve previous state snapshot
return {...prevstate,enteredTitle:event.target.value}
})

*/

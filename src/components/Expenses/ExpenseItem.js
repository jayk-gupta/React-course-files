// A componenet in react is just a fucntion
// importing date
import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // React hook: they must be called directly inside the funciton(not outside,not in a nested fuction)
  const [title, setTitle] = useState(props.title);
  
// variable(current state value),updating function which we can call
  
  const clickHandler = () => {
    setTitle('Updated');
    //**variable will be updated and the whole component (in this case ExpenseItem) will be executed again.
    //State is seperated per component instance basis
    // other instances are not affected by state change in one instance
    console.log(title);
}

  // We get key value pairs in props
  // const expneseDate = new Date(2023,2,23);
  // const expenseTitle= 'Car Insurance';
  // const expenseAmount = 330.22;
  return (
    // Cannot use custom components in other kind of wrappers
    // all defualt html tags support className but custom componenets only support what you tell them to
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="">{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler} >
        Change Title
      </button>
    </Card>
  );
}

export default ExpenseItem;

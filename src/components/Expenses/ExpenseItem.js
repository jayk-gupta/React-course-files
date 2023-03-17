// A componenet in react is just a fucntion
// importing date
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
// useState
  const [title, setTitle] = useState(props.title);
  console.log('Expense item evaluated');
  
  // Handler function
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  // React hook: they must be called directly inside the funciton(not outside,not in a nested fuction)
  // const [title, setTitle] = useState(props.title);

  // variable(current state value),updating function which we can call

  //**variable will be updated and the whole component (in this case ExpenseItem) will be executed again.
  //State is seperated per component instance basis
  // other instances are not affected by state change in one instance

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
      {/* onClick event pointing to handler function */}
      <button onClick={clickHandler}>Change Title</button>
      {/* onClick adds an event listener = {funtion/code which needs to be executed} 
  ->Function passed as a value on click
  */}
      {/* 
      1.We just point to the clickHandler function 
      2. We don't execute it here



      */}
    </Card>
  );
}

export default ExpenseItem;

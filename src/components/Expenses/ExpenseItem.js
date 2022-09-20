import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate  from "./ExpenseDate";
import Card from "../UI/Card";


function ExpenseItem(props) {
  // console.log(props.date);
  const title= props.title;

  return (
    <Card className='expense-item' >
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

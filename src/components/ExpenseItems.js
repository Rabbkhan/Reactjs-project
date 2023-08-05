import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
const ExpenseItems =(props)=> {

  const [title, SetTitle] = useState(props.title);
  const [expense, SetExpense] = useState(props.amount);

  const expenseHandler =()=>{
SetExpense("100");

  }
  const clickHandler =()=>{
    SetTitle('updated!!')
console.log(title);
}
  return (
    <>
    <div className='datesection'>

    <div className='filter'>filter by the</div>
<div className='dropdown'>
    <select option="year">
        <option>2023</option>
        <option>2023</option>
        <option>2023</option>
    </select>
</div>
    </div>
    
<div className='container'>
    
      <ExpenseDate date={props.date}/>
    {/* <div>LocationOfExpenditure</div> */}
    <div className='expensesection'>
        <h3>{title}</h3>
       <div className='price'>${expense}</div> 
        </div>
<button onClick={clickHandler}>change title</button>
<button onClick={expenseHandler}>Update expense</button>
</div>
    </>
  )
}

export default ExpenseItems
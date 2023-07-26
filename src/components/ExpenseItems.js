import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
const ExpenseItems =(props)=> {
  
const clickHandler =()=>{
  console.log('clicked');
}
  return (
    <>
    
<div className='container'>
    
      <ExpenseDate date={props.date}/>
    {/* <div>LocationOfExpenditure</div> */}
    <div className='expensesection'>
        <h3>{props.title}</h3>
       <div className='price'>${props.amount}</div> 
        </div>
<button onClick={clickHandler}>change title</button>
</div>
   


    </>
  )
}

export default ExpenseItems
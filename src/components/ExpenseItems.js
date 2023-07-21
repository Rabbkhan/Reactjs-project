import React from 'react'
import './ExpenseItem.css'
const ExpenseItems =(props)=> {
  
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();
  return (
    <>
    
<div className='container'>
    <div className='date'>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      </div>
    {/* <div>LocationOfExpenditure</div> */}
    <div className='expensesection'>
        <h3>{props.title}</h3>
       <div className='price'>${props.amount}</div> 
        </div>
</div>
    {/* <div>
        <h2>Petrol</h2>
      <div> Rs 100</div> 
        </div>
    <div>
        <h2>Movies</h2>
      <div> Rs 200</div>  
  </div>*/}


    </>
  )
}

export default ExpenseItems
import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredtitle, SetEnteredTitle] = useState('');
    const [enteredAmount, SetEnteredAmount] = useState('');
    const [enteredDate, SetEnteredDate] = useState('');
    const titleChangeHandler =(e)=>{
        SetEnteredTitle(e.target.value);
    }
    const amountChangeHandler =(e)=>{
        SetEnteredAmount(e.target.value)
    }
    const detechangeHandler=(e)=>{
   SetEnteredDate(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const expenseData ={
            title:enteredtitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpensedata(expenseData);
        SetEnteredTitle('');
        SetEnteredAmount('');
        SetEnteredDate('')
    }
  return (

            <form onSubmit={handleSubmit}>
                <div className='new-expense_controls'>
                <div className='new-expense_control'>

                <label form='expensetitle'>Title</label>
                <input type='text' value={enteredtitle} onChange={titleChangeHandler} placeholder='Enter Title'/><br/>
                <label form='expenseamount'>Amount</label>
                <input type='text' value={enteredAmount} onChange={amountChangeHandler} placeholder='Enter Amount'/><br/>
                <label form='expensetdate'>Date</label>
                <input type='date' value={enteredDate} onChange={detechangeHandler} min="2019-01-01"  max=" 2023-12-31" placeholder='Date'/>
                </div>
                <button>Add expense</button>
                </div>
            </form>
        
  )
}

export default ExpenseForm
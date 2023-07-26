import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    // const [expensetitle, SetExpensetitle] = useState();
    // const [expenseamount, SetExpenseamount] = useState();
    // const [expensetdate, SetExpensedate] = useState();
    const titleChangeHandler =(e)=>{
        console.log(e.target.value)
    }
    const submitform=()=>{
        // SetExpensetitle('hurrah')
        console.log('update!!');
    }
  return (

            <form>
                <div className='new-expense_controls'>
                <div className='new-expense_control'>

                <label form='expensetitle'>Title</label>
                <input type='text' onChange={titleChangeHandler} placeholder='Enter Title'/><br/>
                <label form='expenseamount'>Amount</label>
                <input type='text' placeholder='Enter Amount'/><br/>
                <label form='expensetdate'>Date</label>
                <input type='date' min="2019-01-01"  max=" 2023-12-31" placeholder='Date'/>
                </div>
                </div>
                <br/>
                <div className='new-expense_actions'>
                <button onChange ={submitform}>Add expense</button>
                </div>
            </form>
        
  )
}

export default ExpenseForm
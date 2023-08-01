import React from 'react'
// import ExpenseForm from './components/ExpenseForm';
import ExpenseForm from './ExpenseForm'

const NexExpense = (props) => {
    const SaveExpensedatahandler =(enteredExpensedata)=>{
        const expenseData ={
          ...enteredExpensedata,
          id:Math.random().toString()
        }
props.onAddexpense(expenseData)
          }
  return (
    <ExpenseForm onSaveExpensedata={SaveExpensedatahandler}/>
  )
}

export default NexExpense
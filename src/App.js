import React from 'react'
import ExpenseItems from './components/ExpenseItems'

const App = () => {
  const expense = [
    {id:'e1', title:'Food', amount: 294.67, date:new Date(2023, 7, 20)},
    {id:'e2', title:'Mobile', amount: 894.67, date:new Date(2023, 6, 20)},
    {id:'e3', title:'Car', amount: 9894.67, date:new Date(2023, 5, 20)},
  ];
  return (
    <>
    <h1>Lets make a expense Tracker</h1>

    <ExpenseItems 
    title ={expense[0].title}
    amount={expense[0].amount}
     date={expense[0].date}/> 

    <ExpenseItems 
    title ={expense[1].title}
    amount={expense[1].amount}
     date={expense[1].date}/> 

    <ExpenseItems
     title ={expense[2].title}
     amount={expense[2].amount}
     date={expense[2].date}/> 
   
    </>
 )
}

export default App
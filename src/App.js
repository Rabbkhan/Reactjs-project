import React from 'react'
import ExpenseItems from './components/ExpenseItems';
import NexExpense from './components/NexExpense';
const App = (props) => {
  
 
  const addexpensehandler =(expense)=>{
console.log('adding in app.js');
console.log(expense)
  }
  return (
    <>
    <h1>Lets make a expense Tracker</h1>
<NexExpense onAddexpense ={addexpensehandler}/>
{props.items.map((expense)=>(

    <ExpenseItems
     title={expense.title}
      amount={expense.amount}
       date={expense.date} />
))}
   
    </>
 )
}

export default App
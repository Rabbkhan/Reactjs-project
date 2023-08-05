import React, { useState } from 'react';
import ExpenseItems from './components/ExpenseItems';
import NextExpense from './components/NextExpense'; // Fixed typo here

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <>
      <h1>Lets make an Expense Tracker</h1>
      <NextExpense onSaveExpensedata={addExpenseHandler} />
            {expenses.map((expense) => (
        <ExpenseItems
          key={expense.id} // Assuming you have a unique id property in each expense object
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </>
  );
};

export default App;

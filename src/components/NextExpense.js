import React from 'react';
import ExpenseForm from './ExpenseForm';

const NextExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onSaveExpensedata(expenseData); 
    // Corrected prop name here
  };

  return (
    <ExpenseForm onSaveExpensedata={saveExpenseDataHandler} />
  );
};

export default NextExpense;

import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./Expense.css";

const NewExpense = (props) => {
  const expenseDataHandler = (expenseData) => {
    const saveExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(saveExpenseData);
  };
  return (
    <div className="expense container mt-4">
      <ExpenseForm onExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;

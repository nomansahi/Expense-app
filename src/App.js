import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";
const Dummy_Expense = [
  {
    id: "e1",
    title: "Car Insurance",
    price: "566.7",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    price: "200.7",
    date: new Date(2021, 7, 14),
  },
  {
    id: "e3",
    title: "New TV",
    price: "378.8",
    date: new Date(2022, 3, 29),
  },
  {
    id: "e4",
    title: "New Desk",
    price: "109.7",
    date: new Date(2022, 8, 21),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="container expenseBg">
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;

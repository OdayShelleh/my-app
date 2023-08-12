import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Chart from "./components/Chart/Chart";
const DUMMY_EXPENSES = [
  { id: "e1", title: "Books", amount: 231.34, date: new Date(2021, 2, 28) },
  { id: "e2", title: "Phone", amount: 231.34, date: new Date(2021, 2, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
  </header> */}
    </div>
  );
};

export default App;

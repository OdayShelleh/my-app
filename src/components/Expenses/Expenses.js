import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setSelectedFilter(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === selectedFilter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilter}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

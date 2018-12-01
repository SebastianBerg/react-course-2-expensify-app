import React from "react";
import ExpenseList from "../partials/ExpenseList";
import ExpenseListFilters from "../partials/ExpenseListFilters";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;

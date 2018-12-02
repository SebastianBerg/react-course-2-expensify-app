import React from "react";
import ExpensesSummary from "../partials/ExpensesSummary";
import ExpenseListFilters from "../partials/ExpenseListFilters";
import ExpenseList from "../partials/ExpenseList";

export const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

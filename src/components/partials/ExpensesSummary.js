import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../../selectors/expenses";
import selectExpensesTotal from "../../selectors/expenses-total";
import numeral from "numeral";

export function ExpensesSummary({ expenseCount, expensesTotal }) {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling{" "}
        {numeral(expensesTotal / 100).format("$0,0.00")}
      </h1>
    </div>
  );
}

const mapStateToProps = state => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

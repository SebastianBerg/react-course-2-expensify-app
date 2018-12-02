import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../../selectors/expenses";
import selectExpensesTotal from "../../selectors/expenses-total";
import numeral from "numeral";

export function ExpensesSummary({ expenseCount, expensesTotal }) {
  return (
    <div>
      <h1>
        Viewing {expenseCount} expenses totalling{" "}
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

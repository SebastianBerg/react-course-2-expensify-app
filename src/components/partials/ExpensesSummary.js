import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../../selectors/expenses";
import selectExpensesTotal from "../../selectors/expenses-total";
import numeral from "numeral";

export class ExpensesSummary extends React.Component {
  getCurrentFunds() {
    const projectArray = Array.from(this.props.expenses);
    if (projectArray) {
      const projectTotal =
        projectArray
          .map(expense => expense.amount)
          .reduce((prev, next) => prev + next) / 100;
      const expensesNumber = projectArray.length;
      return `Number of Expenses: ${expensesNumber} Total Cost: ${projectTotal}`;
    }
  }

  render() {
    const { expenseCount, expensesTotal } = this.props;

    let expenseWord = expenseCount === 1 ? "expense" : "expenses";

    return (
      <div className="page-header">
        <div className="content-container">
          <div>
            {this.props.expenses.length > 0 ? (
              <h1 className="page-header__title">
                Currently Viewing <span>{expenseCount}</span>
                {expenseWord} totalling{" "}
                <span>{numeral(expensesTotal / 100).format("$0,0")}</span>
              </h1>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

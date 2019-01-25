import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../../selectors/expenses";
import selectExpensesTotal from "../../selectors/expenses-total";
import numeral from "numeral";

export class ExpensesSummary extends React.Component {
  getExpensesNumber() {
    const projectArray = Array.from(this.props.expenses);
    if (projectArray) {
      const expensesNumber = projectArray.length;
      return expensesNumber;
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
                Showing <span>{expenseCount}</span>of
                <span> {this.getExpensesNumber()}</span>
                {expenseWord} for{" "}
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

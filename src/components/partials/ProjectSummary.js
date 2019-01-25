import React from "react";
import { connect } from "react-redux";

export class ProjectSummary extends React.Component {
  getTotalCost() {
    const projectArray = Array.from(this.props.expenses);
    if (projectArray) {
      const projectTotal =
        projectArray
          .map(expense => expense.amount)
          .reduce((prev, next) => prev + next) / 100;
      return projectTotal;
    }
  }

  getNumberExpenses() {
    const projectArray = Array.from(this.props.expenses);
    if (projectArray) {
      const expensesNumber = projectArray.length;
      return expensesNumber;
    }
  }

  render() {
    return (
      <div className="content-container">
        {this.props.expenses.length > 0 ? (
          <div>
            <h1 className="page-header__title--center">Project Summary</h1>
            <div className="header__content--s-padding">
              <h1 className="page-header__title">
                Number of expenses: <span>${this.getNumberExpenses()}</span>
              </h1>
              <h1 className="page-header__title">
                Total Cost: <span>${this.getTotalCost()}</span>
              </h1>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
  project: state.project
});

export default connect(mapStateToProps)(ProjectSummary);

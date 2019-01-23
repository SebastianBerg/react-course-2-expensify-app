import React from "react";
import ExpensesSummary from "../partials/ExpensesSummary";
import ExpenseListFilters from "../partials/ExpenseListFilters";
import ExpenseList from "../partials/ExpenseList";
import ProjectHeader from "../partials/ProjectHeader";
import { connect } from "react-redux";

export class ExpenseDashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
  }

  render() {
    return (
      <div>
        <ProjectHeader />
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps)(ExpenseDashboardPage);

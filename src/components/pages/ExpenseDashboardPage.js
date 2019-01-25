import React from "react";
import { connect } from "react-redux";
import ExpensesSummary from "../partials/ExpensesSummary";
import ExpenseListFilters from "../partials/ExpenseListFilters";
import ExpenseList from "../partials/ExpenseList";
import ProjectHeader from "../partials/ProjectHeader";
import ProjectSummary from "../partials/ProjectSummary";

export class ExpenseDashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    this.setState({
      project: {
        name: ""
      }
    });
  }

  render() {
    return (
      <div>
        <ProjectHeader />
        {this.props.project.name ? (
          <div>
            <ExpenseListFilters />
            <ExpenseList />
            <ExpensesSummary />
            <ProjectSummary />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps)(ExpenseDashboardPage);

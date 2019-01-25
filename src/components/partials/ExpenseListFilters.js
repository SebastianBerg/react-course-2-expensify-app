import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import { Link } from "react-router-dom";

export class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calenderFocused => {
    this.setState(() => ({ calenderFocused }));
  };

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = e => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="header__content--s-padding">
          <div className="page-header__actions">
            <Link className="button show-for-mobile" to="/create-post">
              Add Expense
            </Link>
          </div>
          <h1 className="page-header__title">Filter expenses to view</h1>
          <div className="page-header__actions">
            <Link className="button show-for-desktop" to="/create-post">
              Add Expense
            </Link>
          </div>
        </div>

        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              value={this.props.filters.text}
              onChange={this.onTextChange}
              placeholder="Search expenses"
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              // value={this.props.filters.sortBy}
              onChange={this.onSortChange}
              defaultValue={"default"}
            >
              <option value="default" disabled>
                Sort By
              </option>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calenderFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
              startDateId={"123456"}
              endDateId={"654321"}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);

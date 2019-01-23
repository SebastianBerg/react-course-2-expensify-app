import React, { Component } from "react";
import "react-dates/initialize";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.project ? props.project.name : "",
      initialFunds: props.project ? props.project.initialFunds : "",
      info: props.project ? props.project.info : "",
      calenderFocused: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onAmountChange = e => {
    const initialFunds = e.target.value;

    if (!initialFunds || initialFunds.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ initialFunds }));
    }
  };

  onInfoChange = e => {
    const info = e.target.value;
    this.setState(() => ({ info }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.name || !this.state.initialFunds) {
      this.setState(() => ({
        error: "Please provide a Name and an initial Funding. (This can be 0)"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        name: this.state.name,
        initialFunds: this.state.initialFunds,
        info: this.state.info
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          className="text-input"
          name=""
          id=""
          placeholder="Name"
          autoFocus
          value={this.state.name}
          onChange={this.onDescriptionChange}
        />

        <input
          type="amount"
          className="text-input"
          placeholder="Initial Funds"
          value={this.state.initialFunds}
          onChange={this.onAmountChange}
        />

        <textarea
          placeholder="Add info about the project (optional)"
          className="textarea"
          cols="30"
          rows="10"
          value={this.state.info}
          onChange={this.onInfoChange}
        />
        <div>
          <button className="button">Save Project</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;

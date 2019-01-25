import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";

export class Header extends Component {
  render() {
    const { startLogout } = this.props;

    return (
      <header className="header" style={{ opacity: ".97" }}>
        <div className="content-container">
          <div className="header__content">
            <div>
              <Link className="header__title" to="/dashboard">
                <h1>Expensify</h1>
              </Link>
            </div>
            <div className="header__content--s-padding">
              {this.props.project.name &&
              this.props.location.pathname === "/dashboard" ? (
                <Link to="/create-post" className="button button--link">
                  Add Expense
                </Link>
              ) : null}
              {this.props.project.name &&
              this.props.location.pathname === "/dashboard" ? (
                <Link to="/create-project" className="button button--link">
                  Edit Project
                </Link>
              ) : null}
              {this.props.location.pathname !== "/dashboard" ? (
                <Link to="/dashboard" className="button button--link">
                  Home
                </Link>
              ) : (
                <Link to="/create-project" className="button button--link">
                  Create Project
                </Link>
              )}
              <button className="button button--link" onClick={startLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div>
          <Link className="header__title" to="/dashboard">
            <h1>Expensify - Project Edition</h1>
          </Link>
        </div>
        <div>
          {/* {this.props.location.pathname !== "/dashboard" ? ( */}
          <Link to="/dashboard" className="button button--link">
            Home
          </Link>
          {/* ) : null} */}

          <Link to="/create-project" className="button button--link">
            Create New Project
          </Link>
          <button className="button button--link" onClick={startLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);

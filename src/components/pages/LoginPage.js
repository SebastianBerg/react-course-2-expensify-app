import React from "react";
import { connect } from "react-redux";
import { startLoginGoogle, startLoginFacebook } from "../../actions/auth";

export const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify - Project Version</h1>
        <p>A web app designed to keep the budget of your diffrent projects.</p>
        <button
          className="button"
          onClick={startLoginGoogle}
          style={{ width: "95%" }}
        >
          Login with Google
        </button>
        <p />
        <button
          className="button--facebook"
          onClick={startLoginFacebook}
          style={{ width: "95%" }}
        >
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLoginGoogle: () => dispatch(startLoginGoogle()),
  startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);

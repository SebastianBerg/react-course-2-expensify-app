import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { StickyContainer, Sticky } from "react-sticky";

// Partial Imports
import Header from "../components/partials/Header";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <StickyContainer>
          <Sticky>
            {({ style }) => (
              <header style={style}>
                <Header />
              </header>
            )}
          </Sticky>

          <Component {...props} />
        </StickyContainer>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);

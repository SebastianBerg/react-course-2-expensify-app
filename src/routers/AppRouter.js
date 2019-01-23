import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

// Page Imports
import LoginPage from "../components/pages/LoginPage";
import { ExpenseDashboardPage } from "../components/pages/ExpenseDashboardPage";
import AddExpensePage from "../components/pages/AddExpensePage";
import AddProjectPage from "../components/pages/AddProjectPage";
import EditExpensePage from "../components/pages/EditExpensePage";
import NotFoundPage from "../components/pages/NotFoundPage";

// Routing
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// For having redirects outside router
export const history = createHistory();

class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/create-post" component={AddExpensePage} />
            <PrivateRoute path="/create-project" component={AddProjectPage} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;

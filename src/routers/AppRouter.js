import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Page Imports
import ExpenseDashboardPage from "../components/pages/ExpenseDashboardPage";
import AddExpensePage from "../components/pages/AddExpensePage";
import EditExpensePage from "../components/pages/EditExpensePage";
import HelpPage from "../components/pages/HelpPage";
import NotFoundPage from "../components/pages/NotFoundPage";

// Partial Imports
import Header from "../components/partials/Header";

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;

import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import SearchPage from "./js/pages/SearchPage";
import AllBooksPage from "./js/pages/AllBooksPage";
import LoginPage from "./js/pages/LoginPage";
import LandingPage from "./js/pages/LandingPage";
import HomePage from "./js/pages/HomePage";
import MyBooksPage from "./js/pages/MyBooksPage";
import LendReceivePage from "./js/pages/LendReceivePage";
import NewBookPage from "./js/pages/NewBookPage";
import HistoryPage from "./js/pages/HistoryPage";
import TransactionsPage from "./js/pages/TransactionsPage";
import ManagePage from "./js/pages/ManagePage";
import Error403 from './js/views/403';
import Error404 from './js/views/404'

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/library" component={HomePage} />
        <Route exact path="/loginPage" component={LoginPage} />
        <Route exact path="/books/search" component={SearchPage} />
        <Route exact path="/books/allBooks" component={AllBooksPage} />
        <Route exact path="/books/myBooks" component={MyBooksPage} />
        <Route exact path="/books/lendReceive" component={LendReceivePage} />
        <Route exact path="/books/new" component={NewBookPage} />
        <Route exact path="/reports/myHistory" component={HistoryPage} />
        <Route exact path="/reports" component={TransactionsPage} />
        <Route exact path="/users" component={ManagePage} />
        <Route exact path="/not_found_error" component={Error404} />
        <Route exact path="/forbidden" component={Error403} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
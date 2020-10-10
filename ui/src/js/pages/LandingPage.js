import React from 'react';
import Login from '../views/login';
import Header from '../views/Header';
import Footer from '../views/Footer';
export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="my-body">
        <div className="ajax_loader hidden"><i className="fa fa-spinner fa-pulse fa-fw"></i></div>
        <div className="row navbar-fixed-top">
          <div className="col-md-12">
            <Header />
          </div>
          <div id="snackbar-global" className="snackbar"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <Login />
            </div>
          </div>
          <div className="row">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
import React from 'react';
import Footer from '../views/Footer';
import LoginForm from '../views/LoginForm';
export default class LoginPage extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <LoginForm />
            </div>
          </div>
          <div className="row">
            <Footer />
          </div>
        </div>
      </>
    )
  }
}
import React from 'react';
import "../../assets/styles/login.css";
export default class Login extends React.Component {
    render() {
        return <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3 col-sm-2"></div>
                <div className="jumbotron col-md-6 col-sm-8 row" id="login-btn-container">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0">
                            <p>Borrowing a book was never so easy!</p>
                            <a className="btn-lg btn-social btn-google" id="login-anchor" href="/loginPage">
                                <span className="fa fa-google"></span> Sign in with <span style={{ fontWeight: "bold" }}>Email</span>Address</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-2"></div>
            </div>
        </div>
    }
}
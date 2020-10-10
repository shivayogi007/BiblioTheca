import React from 'react';
import avtarImage from '../../assets/images/loginImage.png'
// import '../../assets/styles/importer.css'
// import '../../assets/styles/login.css'
// import '../../assets/styles/loginForm.css'
import Header from './Header';
import Footer from './Footer';

export default class LoginForm extends React.Component {
  changeCheckBox() { }
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
        <div className="logincontainer">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <h2 className="loginFormLabel">Login Form</h2>
              <form className='loginFormContainer' action="/library" method="GET">
                <div className="imgcontainer">
                  <img src={avtarImage} alt="Avatar" className="avatar" />
                </div>

                <div>
                  <label htmlFor="uname"><b>Username</b></label>
                  <input className="login-form-input" type="text" placeholder="Enter Username" name="uname" required />

                  <label htmlFor="psw"><b>Password</b></label>
                  <input className="login-form-input" type="password" placeholder="Enter Password" name="psw" required />

                  <button className="login-button" type="submit">Login</button>
                  <label>
                    <input type="checkbox" onChange={this.changeCheckBox} checked="checked" name="remember" /> Remember me
                  </label>
                  <div className="Cancelcontainer">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="/loginPage">password?</a></span>
                  </div>
                </div>
              </form>

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

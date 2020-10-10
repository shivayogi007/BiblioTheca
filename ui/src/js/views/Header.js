import React from 'react';
import libraryLogo from '../../assets/images/favicon.jpg'
import logo from '../../assets/images/libraryLogo.svg'
// import '../../assets/styles/header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a href="/library" id="library-home">
          <img src={logo} alt="logo" />
          <h1>BIBLIOTHECA</h1>
        </a>
        <div className="float-right">
          <div id="profile-image" className="profile-photo">
            <img className='img-circle' alt="profilePic" src={libraryLogo} />
          </div>
          <div className="visible-lg-inline-block visible-md-inline-block visible-sm-inline-block">
            <div id="email-id">name of user</div>
          </div>
          <div className="visible-xs-inline-block">
            <div id="email-id-xs"></div>
          </div>
          <a href="/" title="logout">
            <i className="fa fa-sign-out logout-icon" aria-hidden="true"></i>
          </a>
        </div>
      </header>
    )
  }
}
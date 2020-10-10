import React from 'react';
// import '../../assets/styles/importer.css';
import Header from '../views/Header';
import Footer from '../views/Footer';
import NavigationBar from '../views/NavigationBar';

export default class HomePage extends React.Component {
  render() {
    return (<div className="container-fluid">
      <div className="ajax_loader hidden"><i className="fa fa-spinner fa-pulse fa-fw"></i></div>
      <div className="row navbar-fixed-top">
        <div className="col-md-12">
          <Header />
          <NavigationBar />
        </div>
        <div id="snackbar-global" className="snackbar"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>)
  }
}
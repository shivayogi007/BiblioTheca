import React from 'react';
import bookSearch from '../../assets/images/bookSearch.svg'
import lendReceive from '../../assets/images/lendReceive.svg'
import addBook from '../../assets/images/add-book.svg'
import addUser from '../../assets/images/add-user.svg'
// import '../../assets/styles/importer.css';
// import '../../assets/styles/navigationBar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse background-white" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <div className="user-links link-container">
                  <a href="/books/search" id="search-book">
                    <img src={bookSearch} alt="bookSearch" />
                  </a>
                </div>
              </li>
              <li>
                <div className="user-links link-container">
                  <a href="/books/allBooks" id="all-books">All Books</a>
                </div>
              </li>

              <li>
                <div className="user-links link-container">
                  <a href="/books/myBooks" id="currently-reading">Currently Reading</a>
                </div>
              </li>

              <li>
                <div className="user-links link-container">
                  <a href="/reports/myHistory" id="my-history">Already Read</a>
                </div>
              </li>

            </ul>
            <ul className="nav navbar-nav navbar-right">

              <li>
                <div className="admin-links link-container">
                  <a href="/books/lendReceive" id="lend-receive">
                    <img src={lendReceive} alt="lendReceive" />
                  </a>
                </div>
              </li>

              <li>
                <div className="admin-links link-container">
                  <a href="/reports" id="reports">Reports</a>
                </div>
              </li>

              <li>
                <div className="admin-links link-container">
                  <a href='/books/new' id="add-book-btn">
                    <img src={addBook} alt="addBook" />
                  </a>
                </div>
              </li>

              <li>
                <div className="admin-links link-container">
                  <a href='/users/' id="add-user-selection-bar">
                    <img src={addUser} alt="addUser" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

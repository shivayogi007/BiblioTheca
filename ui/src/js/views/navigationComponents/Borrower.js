import React from 'react';
import bookSarch from "../../../assets/images/bookSearch.svg"
// import '../../../assets/styles/navigationBar.css'
export default class Borrower extends React.Component {
    render() {
        return (
            < ul className="navigation">
                <li>
                    <div className="user-links link-container">
                        <a href="/books/" id="search-book">
                            <img src={bookSarch} />
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
        )
    }
}
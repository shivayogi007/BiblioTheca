import React from 'react';
import addBook from "../../../assets/images/addbook.svg"
// import 'bootstrap/dist/css/bootstrap.min.css';
export default class Librarian extends React.Component {
    render() {
        return (
            <ul className="navigation">
                < li >
                    <div class="admin-links link-container">
                        <a href="/reports" id="reports">Reports</a>
                    </div>
                </li>
                <li>
                    <div class="admin-links link-container">
                        <a href='/books/new' id="add-book-btn">
                            <img src={addBook} alt="" />
                        </a>
                    </div>
                </li>
            </ul>
        )
    }
}